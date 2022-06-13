package com.robsom.CadastroDeContato.entity;

import lombok.*;

import javax.persistence.*;
import java.util.List;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Contact {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JoinColumn(name = "name")
    @Column(nullable = false)
    private String name;

    @JoinColumn(name = "surname")
    @Column(nullable = false)
    private String surname;

    @JoinColumn(name = "cpf")
    @Column(nullable = false, unique = true)
    private String cpf;

    private String email;

    @JoinColumn(name = "phones")
    @OneToMany(fetch = FetchType.LAZY, cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REMOVE})
    private List<Phone> phones;


}
