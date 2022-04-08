const getMyCode = async () => {
    try {
        const response = await fetch('https://api.github.com/users/knaagar/repos')
        if(response.ok) {
            const json = await response.json()
            
            for(let i = 0; i < json.length; i++) {
                const parent = document.getElementById('repos')
                const child = document.createElement('div')
                child.innerHTML = `
                <h2>${json[i].name}</h2>
                `
                parent.appendChild(child)
            }
            console.log(json.length)
        }
    } catch(error) {
        console.log(error)
    }
}
getMyCode()