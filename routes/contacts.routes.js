import express from 'express';
const router = express.Router();
import Contact from '../models/contacts.model.js';
import { 
    getAllContacts, 
    getContact,
    getAddContact, 
    addContact, 
    getUpdateContact, 
    updateContact, 
    deleteContact 
} from '../controller/contacts.controller.js';

// Routes
router.get('/', getAllContacts)

router.get('/show-contact/:id', getContact)

router.get('/add-contact/', getAddContact)

router.post('/add-contact', addContact) 

router.get('/update-contact/:id', getUpdateContact)

router.post('/update-contact/:id', updateContact) 
 
router.get('/delete-contact/:id', deleteContact) 

router.get('/404', (req, res) => {
    res.render('404');
});

router.get('/500', (req, res) => {
    res.render('500');
});

export default router;
