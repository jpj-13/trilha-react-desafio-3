import React from 'react'
import { useNavigate  } from "react-router-dom";
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Container, Column, Banner, Text, Wrapper, Title, TextUserExists, TextLoginLink, TextLegal } from './styles';
import { useForm } from "react-hook-form";
import { MdEmail, MdLock, MdPerson } from 'react-icons/md'

const Signup = () => {
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate("/login")
    }
    
    const { control, handleSubmit, formState: { errors  } } = useForm({
        reValidateMode: 'onChange',
        mode: 'onChange',
    });
    
    const onSubmit = async (formData) => {
        try{
            console.table(formData);
        }catch(e){
            console.log('erro');
        }
    };

  return (<>
        <Header />
        <Container>
            <Column>
                <Banner>
                    Texto de banner aqui
                </Banner>
            </Column>
            <Column>
                <Wrapper>
                    <Title>Crie sua conta</Title>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input name="nome" placeholder="Nome*" leftIcon={<MdPerson />} control={control} />
                            {errors.name && <span>Nome é obrigatório</span>}
                        <Input name="email" placeholder="E-mail*" leftIcon={<MdEmail />} control={control} />
                            {errors.email && <span>E-mail é obrigatório</span>}
                        <Input type="password" name="senha*" placeholder="Senha" leftIcon={<MdLock />} control={control} />
                            {errors.senha && <span>Senha é obrigatório</span>}
                        <Button title="Criar conta" variant="secondary" type="submit"/>
                    </form>
                    <TextUserExists>
                        Já tenho conta. 
                    </TextUserExists> 
                    <TextLoginLink>
                        <a onClick={handleLogin}>Fazer login</a>
                    </TextLoginLink>
                    
                </Wrapper>
            </Column>
        </Container>
    </>
  )
}

export { Signup }