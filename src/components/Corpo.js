import Stories from "./Stories"
import Posts from "./Posts"
import Sidebar from "./Sidebar"

export default function Corpo() {
    return (
        <div class="corpo">
            <Esquerda />
            <Sidebar />
            <div class="fundo-mobile">
                <ion-icon name="home"></ion-icon>
                <ion-icon name="search-outline"></ion-icon>
                <ion-icon name="add-circle-outline"></ion-icon>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="person-outline"></ion-icon>
            </div>
        </div>
    )
}

function Esquerda() {
    return (
        <div class="esquerda">
            <Stories />
            <Posts />
        </div>
    )
}