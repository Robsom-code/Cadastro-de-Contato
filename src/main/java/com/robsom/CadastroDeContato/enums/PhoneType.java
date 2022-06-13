package com.robsom.CadastroDeContato.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum PhoneType {
    NOVALUE("N/A"),
    HOME("Home"),
    MOBILE("Mobile"),
    COMMERCIAL("Commercial");


    private String description;

}

