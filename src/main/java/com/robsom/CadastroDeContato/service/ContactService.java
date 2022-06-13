package com.robsom.CadastroDeContato.service;

import com.robsom.CadastroDeContato.dto.request.ContactDTO;
import com.robsom.CadastroDeContato.dto.response.MessageResponseDTO;
import com.robsom.CadastroDeContato.entity.Contact;
import com.robsom.CadastroDeContato.exception.ContactNotFoundException;
import com.robsom.CadastroDeContato.mapper.ContactMapper;
import com.robsom.CadastroDeContato.repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ContactService {




    private ContactRepository contactRepository;

    @Autowired
    public ContactService(ContactRepository contactRepository) {
        this.contactRepository = contactRepository;
    }


    private final ContactMapper contactMapper = ContactMapper.INSTANCE;

    public MessageResponseDTO createContact(ContactDTO contactDTO) {
        Contact contactToSave = contactMapper.toModel(contactDTO);

        Contact savedContact = contactRepository.save(contactToSave);
        return createMessageResponse(savedContact.getId(), "Criado com ID");
    }

    public List<ContactDTO> listAll() {
        List<Contact> allData = contactRepository.findAll();
        return allData.stream()
                .map(contactMapper::toDTO)
                .collect(Collectors.toList());
    }

    public ContactDTO findById(Long id) throws ContactNotFoundException {
        Contact contact = verifyIfExists(id);

        return contactMapper.toDTO(contact);
    }

    public void delete(Long id) throws ContactNotFoundException {
        verifyIfExists(id);
        contactRepository.deleteById(id);
    }

    public MessageResponseDTO updateById(Long id, ContactDTO contactDTO) throws ContactNotFoundException {
        verifyIfExists(id);

        Contact contactToUpdate = contactMapper.toModel(contactDTO);

        Contact updatedContact = contactRepository.save(contactToUpdate);
        return createMessageResponse(updatedContact.getId(), "Contato atualizado com ID ");
    }

    private Contact verifyIfExists(Long id) throws ContactNotFoundException {
        return contactRepository.findById(id)
                .orElseThrow(() -> new ContactNotFoundException(id));
    }

    private MessageResponseDTO createMessageResponse(Long id, String message) {
        return MessageResponseDTO.builder().message(message + id).build();
    }
}
