new Vue({
    el: '#app',
    data: {
        name: 'Система учетов студентов',
        description: 'Добро пожаловать в систему учёта посещаемости студентов. Здесь вы можете  \n' +
            '            отслеживать посещаемость студентов',
            title: 'Student9000',
            last_name: '',
            first_name: '',
            placeholder_last_name: 'Введите фамилию',
            placeholder_first_name: 'Введите имя',
            student_list: [],
            html: '',
            i: 0,
            student: '<li class="student-list-item">' + this.last_name + this.first_name + '</li>',
    }
})