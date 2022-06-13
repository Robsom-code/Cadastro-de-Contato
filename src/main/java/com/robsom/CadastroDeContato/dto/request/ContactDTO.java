package com.robsom.CadastroDeContato.dto.request;

import lombok.*;
import org.hibernate.validator.constraints.br.CPF;
import org.springframework.web.servlet.function.ServerRequest;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.List;


@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ContactDTO {
    private Long id;

    @NotNull
    @Size(min = 2, max = 100)
    private String name;

    @NotNull
    @Size(min = 2, max = 100)
    private String surname;


    @CPF
    private String cpf;

    public String email;


    @Valid
    @NotNull
    private List<PhoneDTO> phones;
}
