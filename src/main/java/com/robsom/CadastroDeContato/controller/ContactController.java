package com.robsom.CadastroDeContato.controller;

import com.robsom.CadastroDeContato.dto.request.ContactDTO;
import com.robsom.CadastroDeContato.dto.response.MessageResponseDTO;
import com.robsom.CadastroDeContato.exception.ContactNotFoundException;
import com.robsom.CadastroDeContato.service.ContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;


@RequestMapping("/contact")
@RestController
public class ContactController {



    @Autowired
    private ContactService contactService;

    public ContactController(ContactService contactService) {
        this.contactService = contactService;
    }


    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public MessageResponseDTO createContact(@RequestBody @Valid ContactDTO contactDTO) {
        return contactService.createContact(contactDTO);
    }

    @GetMapping
    public List<ContactDTO> listAll() {
        return contactService.listAll();
    }


    @GetMapping("/{id}")
    public ContactDTO findById(@PathVariable Long id) throws ContactNotFoundException {
        return contactService.findById(id);
    }


    @PutMapping("/{id}")
    public MessageResponseDTO updateById(@PathVariable Long id, @RequestBody @Valid ContactDTO contactDTO) throws ContactNotFoundException {
        return contactService.updateById(id, contactDTO);
    }


    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteById(@PathVariable Long id) throws ContactNotFoundException {
        contactService.delete(id);
    }

}
