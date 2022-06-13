package com.robsom.CadastroDeContato.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class ContactNotFoundException extends Exception {
    public ContactNotFoundException(Long id) {
        super("Person not found with ID " + id);}
}
