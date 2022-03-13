import Post from "./Post";

export default function Stories() {
    const list = getPosts();

    return (
        <div class="posts">

            {list.map((item) => {
                return (<Post
                    perfil={item.perfil}
                    nome={item.nome}
                    tipo={item.tipo}
                    content={item.content}
                    altContent={item.altContent}
                    curtidoPor={item.curtidoPor}
                    numCurtidas={item.numCurtidas}
                    perfilCurtido={item.perfilCurtido}
                />
                )
            })}

        </div>
    )
}

function getPosts() {
    const list = [
        {
            perfil: "./assets/img/meowed.svg",
            tipo: "foto",
            nome: "meowed",
            content: "./assets/img/gato-telefone.svg",
            altContent: null,
            curtidoPor: "respondeai",
            perfilCurtido: "./assets/img/respondeai.svg",
            numCurtidas: 101.523
        },
        {
            perfil: "./assets/img/barked.svg",
            tipo: "foto",
            nome: "barked",
            content: "./assets/img/dog.svg",
            altContent: null,
            curtidoPor: "adorable_animals",
            perfilCurtido: "./assets/img/adorable_animals.svg",
            numCurtidas: 99.159
        },
        {
            perfil: "./assets/img/wawawicomics.svg",
            tipo: "video",
            nome: "wawawicomics",
            content: "./assets/video/video.mp4",
            altContent: "./assets/video/video.ogv",
            curtidoPor: "barked",
            perfilCurtido: "./assets/img/barked.svg",
            numCurtidas: 75.969
        }
    ];

    return list;
}