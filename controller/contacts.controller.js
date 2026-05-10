import Contact from '../models/contacts.model.js';
import mongoose, { isValidObjectId } from 'mongoose';


// Controller functions for handling contact-related operations
// its just a comment
// home
export const getAllContacts = async (req, res) => {
  try {
    const { page = 1, limit = 3 } = req.query;

    // Define the pagination options, including the page number and the number of contacts to display per page. In this case, we are setting the page to 1 and the limit to 5, which means we want to retrieve the first 5 contacts from the database.
    const  options = {
      // We received "page" as a string from URL and we must convet this into integer using parseInt() method, otherwise it will not work as expected 
      page: parseInt(page), 
      limit: parseInt(limit) 
    }
    // const contacts = await Contact.find()

    // use the paginate method provided by the mongoose-paginate-v2 plugin to retrieve a paginated list of contacts from the database. The first argument is an empty object, which means we want to retrieve all contacts, and the second argument is the options object that specifies the pagination settings (page number and limit).

    const Totalcontacts = await Contact.paginate({}, options)  
    // res.send(Totalcontacts) 
    res.render('home', {
      totalDocs: Totalcontacts.totalDocs,
      limit: Totalcontacts.limit, 
      totalPages: Totalcontacts.totalPages,
      currentpage: Totalcontacts.page,
      pagingCounter: Totalcontacts.pagingCounter,
      hasPrevPage: Totalcontacts.hasPrevPage,
      hasNextPage: Totalcontacts.hasNextPage,
      prevPage: Totalcontacts.prevPage,
      nextPage: Totalcontacts.nextPage,
      contacts: Totalcontacts.docs
     })
  } catch (error) { 
    res.render('500', { message: error })
  }
};

// Show contact details
export const getContact = async (req, res) => {
  // Check if the provided ID is a valid MongoDB ObjectId, if not render 404 page
  const paramId = mongoose.Types.ObjectId.isValid(req.params.id)
  if (!paramId) {
    return res.render('404', { message: 'Contact not found' })
  }
  // If Id does not exist in database anymore (for deleted contacts), render 404 page 
  try {
    const contact = await Contact.findById(req.params.id)
    if (!contact) return res.render('404', { message: 'Contact not found' })
    // res.json(contact)
    res.render('show-contact', { contact })
  } catch (error) {
    res.render('500', { message: error })
  }
}


// Add new contact form
export const getAddContact = async (req, res) => {
  res.render('add-contact');
}

// Add new contact
export const addContact = async (req, res) => {
  try {
    await Contact.create(req.body) // create a new contact using the data from the request body
    res.redirect('/') // redirect to home page after adding contact
  } catch (error) {
    res.render('500', { message: error })
  }
}

// Update contact
export const getUpdateContact = async (req, res) => {
  const paramId = mongoose.Types.ObjectId.isValid(req.params.id)
  if (!paramId) {
    return res.render('404', { message: 'Contact not found' })
  }

  try {
    const contact = await Contact.findById(req.params.id)
    if (!contact) return res.render('404', { message: 'Contact not found' })
    res.render('update-contact', { contact }) // render the update-contact view and pass the contact details to it
  } catch (error) {
    res.render('500', { message: error })
  }


}

// Update contact
export const updateContact = async (req, res) => {
  const paramId = mongoose.Types.ObjectId.isValid(req.params.id)
  if (!paramId) {
    return res.render('404', { message: 'Contact not found! Fahhhhhh' })
  }

  try {
    const contact = await Contact.findByIdAndUpdate(req.params.id, req.body) // find the contact by ID and update it with the data from the request body
    if (!contact) return res.render('404', { message: 'Contact not found' })
    res.redirect('/') // redirect to home page after updating contact
  } catch (error) {
    res.render('500', { message: error })
  }
}

export const deleteContact = async (req, res) => {
  const paramId = mongoose.Types.ObjectId.isValid(req.params.id)
  if (!paramId) {
    return res.render('404', { message: 'Contact not found' })
  }

  try {
    const contact = await Contact.findByIdAndDelete(req.params.id) // find the contact by ID and delete it from the database
    if (!contact) return res.render('404', { message: 'Contact not found' })
    res.redirect('/') // redirect to home page after deleting contact
  } catch (error) {
    res.render('500', { message: error })
  }
}

