package com.robsom.CadastroDeContato.entity;

import com.robsom.CadastroDeContato.enums.PhoneType;
import lombok.*;

import javax.persistence.*;


@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Phone {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private PhoneType type;

    @Column(nullable = false)
    private String number;

    @Enumerated(EnumType.STRING)
    private PhoneType altType;

    private String altNumber;


}
