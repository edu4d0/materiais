import { GithubUser } from "./githubUser.js";
// classe que vai conter a lógica dos dados
// como os dados serão estruturados
export class Favorites{
    constructor(root){
        this.root = document.querySelector(root)
        this.load()

        GithubUser.search('edu4d0').then(user => (user))
    }

    load(){
        const entries = JSON.parse(localStorage.getItem
            ('@github-favoites:')) || []

        }

    save(){
        localStorage.setItem('@github-favoites:', JSON.stringify(this.entries))
    }

    async add(username){
        try{
            const userExiste = this.entries.find(entry => entry.login === username)



            const user = await GithubUser.search(username)

            if(user.login === undefined){
                throw new Error(' Usuário não encontrado! ')
            }

            this.entries = [user, ...this.entries]
            this.update()
            this.save()

        }catch(error){
           alert (error.message)
        }
    }

    delete(user) {
        const filteredEntries = this.entries
        .filter(entry => entry.login !== user.login)

        this.entries = filteredEntries
        this.update()
        this.save()
    }
}

// classe que vai criar a visualização e eventos do HTML
export class FavoritesView extends Favorites {
    constructor(root){
        super(root)
        
        this.tbody = this.root.querySelector('table tbody')

        this.update()
        this.onadd()
    }

    onadd (){
        const addButton = this.root.querySelector('.search button')
        addButton.onclick = () => {
            const { value } = this.root.querySelector('.search input')

            this.add(value)
        }
    }

    update(){
        this.removeAllTr()

    
    this.entries.forEach (user => {
        const row = this.createRow()

        row.querySelector('.user img').src = `https://github.com/${user.login}.png`
        row.querySelector('.user img').alt = `Image de ${user.name}`
        row.querySelector('.user p').textContent = user.name
        row.querySelector('.user a').href = `https:/github.com/${user.login}`
        row.querySelector('.user span').textContent = user.login
        row.querySelector('.repositories').textContent = user.public_repos
        
        row.querySelector('.remove').onclick = () => {
            const isOk = confirm('Tem certeza que deseja deletar essa linha?')
            if(isOk) {
                this.delete(user)
            }
                }

        this.tbody.append(row)
    })
        }

        createRow(){
            const tr = document.createElement('tr')

            tr.innerHTML = `<tr>
        <td class="user">
            <img src="https://github.com/edu4d0.png" alt="imagem de edu4d0">
            <a href="https://github.com/edu4d0" target="_blank">
                <p>Eduardo Araújo</p>
                <span>edu4d0</span>
            </a>
        </td>    <td class="repositories">
        6
        </td>
        <td class="followers">
        42
        </td>
        <td>
        <button class = "remove">&times;</button>
        </td>
        </tr>
        `

        return tr
        }
    
    removeAllTr(){
    
        this.tbody.querySelector('tr')
        .forEach((tr) => {tr.remove()})

    }
}