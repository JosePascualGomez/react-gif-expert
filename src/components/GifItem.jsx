

export const GifItem = ({ title, url, id}) => {
    console.log(title, url);
    return (
        <div class="card">
            <img src={url} alt={id} />
            <p>{title}</p>
        </div>
    )
}
