import React from 'react'

import PageHeader from '../../components/PageHeader';

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
        </div>
    )
}

export default TeacherList;