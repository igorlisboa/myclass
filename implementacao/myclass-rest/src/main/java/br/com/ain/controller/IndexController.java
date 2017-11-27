package br.com.ain.controller;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author igorlisboa - 11/2017
 */
@RestController
public class IndexController {

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String teste(){
        return "Esta funcionando o servidor";
    }

    @RequestMapping(value = "/{nome}", method = RequestMethod.GET)
    public String teste(@PathVariable String nome){
        return "Testando requisicao "+nome;
    }

}
