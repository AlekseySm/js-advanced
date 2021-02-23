/*

  Задание:

    Написать при помощи async-await скрипт, который:

    Получает список компаний:  http://www.json-generator.com/api/json/get/ceRHciXcVu?indent=2
    Перебирает, выводит табличку:

    # | Company  | Balance | Показать дату регистрации | Показать адресс |
    1.| CompName | 2000$   | button                    | button
    2.| CompName | 2000$   | 20/10/2019                | button
    3.| CompName | 2000$   | button                    | button
    4.| CompName | 2000$   | button                    | button

    Данные о дате регистрации и адресс скрывать при выводе и показывать при клике.

*/
document.addEventListener('DOMContentLoaded', () => {
    console.log('initial script');


    async function companyList() {
        const getCompanyResponse = await fetch('http://www.json-generator.com/api/json/get/ceRHciXcVu?indent=2');
        const companys = await getCompanyResponse.json();
        console.log('main company', companys);

        let html = `
                    ${companys.map((company) => {
                    return `
                        <div>
                            <div class="company">${company.company}</div>
                            <div class="balance">${company.balance}</div>
                            <div class="registered">${company.registered}</div>
                            <div class="address">
                                <span>${Object.values(company.address)}</span>
                                <button>Show address</button>
                            </div>
                        </div>
                    `;}).join('')}
                `;
        return html;
    }

    let companyListResult = companyList();
    companyListResult.then((data) => {
        let header = `
        <div class="header">
            <div class="company">Company</div>
            <div class="balance">Balance</div>
            <div class="registered">Показать дату регистрации</div>
            <div class="address">Показать адресс</div>
        </div>
        `;
        let resultBlock = document.createElement('div');
        resultBlock.className = 'result';
        resultBlock.innerHTML = header;
        resultBlock.querySelector('.header').insertAdjacentHTML( 'afterEnd',data);
        document.getElementById('app').append(resultBlock);

        document.querySelectorAll('button').forEach((item)=> {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                //console.dir(item.previousElementSibling);
                item.previousElementSibling.style.display = 'block';
                item.style.display = 'none';
            })
        })
    });
});
