const formSearch = document.querySelector('.form-search'),
    inputCitiesFrom = formSearch.querySelector('.input__cities-from'),
    dropdownCitiesFrom = formSearch.querySelector('.dropdown__cities-from'),
    inputCitiesTo = formSearch.querySelector('.input__cities-to'),
    dropdownCitiesTo = formSearch.querySelector('.dropdown__cities-to'),
    inputDateDepart = formSearch.querySelector('.input__date-depart');

const cities = ['Москва', 'Санкт-Петербург', 'Киев', 'Чернигов', 'Минск', 'Караганда', 
        'Челябинск', 'Керчь', 'Волгоград', 'Самара', 'Днепропетровск', 'Екатеринбург', 
        'Одесса', 'Ухань', 'Шишкен', 'Нижний Новгород', 'Калининград', 'Вроцлав', 
        'Ростов-на-дону', 'Милан', 'Париж', 'Лондон', 'Хельсинки', 'Варшава'];

const showCities = (input, list) => {
    list.textContent = '';

    if (input !== '') {
        const filterCity = cities.filter(item => {
            const fixItem = item.toLowerCase();
            return fixItem.includes(input.value.toLowerCase());
        })
    
        filterCity.forEach(item => {
            const li = document.createElement('li');
            li.classList.add('dropdown__city');
            li.textContent = item;
            list.append(li);
        })
    }    
};

const selectCity = (input, list) => {
    list.addEventListener('click', e => {
        console.log(e)
        const target = e.target;
        if(target.tagName.toLowerCase() === 'li') {
            input.value = target.textContent;
            list.textContent = '';
        }
    });
};

inputCitiesFrom.addEventListener('input', () => showCities(inputCitiesFrom, dropdownCitiesFrom));
dropdownCitiesFrom.addEventListener('click', () => selectCity(inputCitiesFrom, dropdownCitiesFrom));
inputCitiesTo.addEventListener('input', () => showCities(inputCitiesTo, dropdownCitiesTo));
dropdownCitiesTo.addEventListener('click', () => selectCity(inputCitiesTo, dropdownCitiesTo));



