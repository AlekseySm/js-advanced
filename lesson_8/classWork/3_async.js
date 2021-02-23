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


    async function companyList () {
        const getCompanyResponse = await fetch("http://www.json-generator.com/api/json/get/ceRHciXcVu?indent=2")
        const companys = await getCompanyResponse.json();
        console.log('main company', companys);

        let html = `    
                    <div>
                        ${companys.map((company) => {
                            return `
                                    <div class="company">${company.company}</div>
                                    <div class="balance">${company.balance}</div>
                                    <div class="registered">${company.registered}</div>
                                    <div class="address">${Object.values(company.address)}</div>
                                `;
                        }).join('')}
                    </div>
                `;
        return html;
    }

    let companyListResult = companyList();
    companyListResult.then( (data) => {
        //console.log('Final Person:', data);
        document.getElementById('app').innerHTML = data;
    });
});
