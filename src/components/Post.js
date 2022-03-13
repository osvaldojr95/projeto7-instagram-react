export default function Post(props) {
    const {
        content,
        tipo,
        altContent,
        nome,
        perfil,
        curtidoPor,
        numCurtidas,
        perfilCurtido
    } = props;
    const conteudo = Conteudo(tipo, content, altContent);

    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={perfil} />
                    {nome}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                {conteudo}
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={perfilCurtido} />
                    <div class="texto">
                        Curtido por <strong>{curtidoPor}</strong> e <strong>outras {numCurtidas} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Conteudo(tipo, content, altContent) {

    if (tipo === "foto") {
        return (
            <img src={content} />
        )
    }
    else {
        const splitContent = content.split('.');
        const typeContent = "video/" + splitContent[splitContent.length - 1];
        if (altContent) {
            const splitAltContent = altContent.split('.');
            const typeAltContent = "video/" + splitAltContent[splitAltContent.length - 1];
            return (
                <video loop muted autoPlay>
                    <source src={content} type={typeContent} />
                    <source src={altContent} type={typeAltContent} />
                    Seu navegador não suporta vídeos.
                </video>
            )
        } else {
            return (
                <video loop muted autoPlay>
                    <source src={content} type={typeContent} />
                    Seu navegador não suporta vídeos.
                </video>
            )
        }
    }
}