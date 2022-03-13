export default function Titulo(props) {
    const { imagem, usuario, nome } = props;

    return (
        <div class="usuario">
            <img src={imagem} />
            <div class="texto">
                <strong>{usuario}</strong>
                {nome}
            </div>
        </div>
    )
}