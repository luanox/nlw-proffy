import React from 'react'

import PageHeader from '../../components/PageHeader';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes sao os proffys disponiveis.">
                <form id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Materia</label>
                        <select name="subject" id="subject" >
                            <option value="">Selecione uma Materia</option> 
                            <option value="valor1">Valor 1</option> 
                            <option value="valor2">Valor 2</option> 
                        </select>
                    </div>
                    <div className="input-block">
                        <label htmlFor="week_day">Dia da semana</label>
                        <select name="week_day" id="week_day" >
                            <option value="">Selecione um Dia da semana</option> 
                            <option value="valor1">Valor 1</option> 
                            <option value="valor2">Valor 2</option> 
                        </select>
                    </div>
                    <div className="input-block">
                        <label htmlFor="time">Hora</label>
                        <select name="time" id="time" >
                            <option value="">Selecione uma Hora</option> 
                            <option value="valor1">Valor 1</option> 
                            <option value="valor2">Valor 2</option> 
                        </select>
                    </div>
                </form>
            </PageHeader>
            <main>
                <article className="teacher-item">
                    <header>
                        <img src="https://avatars1.githubusercontent.com/u/44863619?s=460&u=bac2f257ae64ea63f76402dbac0d47c27ac0335b&v=4" alt="luan"/>
                        <div>
                            <strong>Luan Neves</strong>
                            <span>Biologia</span>
                        </div>
                    </header>
                    <p>
                        Mussum Ipsum, cacilds vidis litro abertis. Si num tem leite então bota uma pinga aí cumpadi! Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum. Paisis, filhis, espiritis santis.
                        <br /><br />
                        Aenean aliquam molestie leo, vitae iaculis nisl. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. 
                    </p>
                    <footer>
                        <p>
                            Preço/Hora
                            <strong>R$ 69,00</strong>
                        </p>
                        <button type="button">
                            <img src={whatsappIcon} alt="whatsapp"/>
                            Entrar em contato
                        </button>
                    </footer>
                </article>
            </main>
        </div>
    )
}

export default TeacherList;