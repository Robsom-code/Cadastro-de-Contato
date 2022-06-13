package com.robsom.CadastroDeContato.mapper;

import com.robsom.CadastroDeContato.dto.request.ContactDTO;
import com.robsom.CadastroDeContato.entity.Contact;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper
public interface ContactMapper {

    ContactMapper INSTANCE = Mappers.getMapper(ContactMapper.class);


    Contact toModel(ContactDTO contactDTO);

    ContactDTO toDTO(Contact contact);
}
