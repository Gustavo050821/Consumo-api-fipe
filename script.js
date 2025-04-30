 const URL = 'https://brasilapi.com.br/api/fipe/preco/v1'
 const form = document.querySelector('form')
 const ul = document.querySelector('ul')

 form.addEventListener('submit', (event) => {
    event.preventDefault()

    
    let id = document.querySelector('input').value

    if(id == ""){
        alert("Digite um codigo fipe")
        return
    }
    
    ul.innerHTML = ""
    
    console.log(id)
    
    pesquisarCarro(id)

    
 })

async function pesquisarCarro(id) {
    const resp = await fetch(`${URL}/${id}`)
    console.log(resp)
    if(resp.status === 200){
        const obj = await resp.json()
        console.log(obj)

        obj.forEach(carro => {
            
            const li = document.createElement('li')

            li.innerHTML = `
                <mark>${carro.modelo}</mark>
                <strong>${carro.valor}</strong>
                <strong>${carro.marca}</strong>
                <strong>${carro.anoModelo}</strong>
                <strong>${carro.combustivel}</strong>
                <strong>${carro.codigoFipe}</strong>
                <p><p>
                

            `    
            ul.appendChild(li)
        });

    }
    else{
        alert("Digite um codigo FIPE válido")
        return
    }
}


