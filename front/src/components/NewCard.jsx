const NewCard = () => {
    return (
        <div class="card" style="width: 100%">
            <form>
                <div class="form-group">
                    <label for="formGroupExampleInput">TITULO</label>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Inscriba el título del producto"/>
                </div>
                <div class="form-group">
                    <label for="formGroupExampleInput">URL DE IMAGEN</label>
                    <img src="URL de imagen" class="card-img-top" alt="Título del producto"/> 
                </div>
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">DESCRIPCIÓN DEL PRODUCTO</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                </div>
                <div class="form-group">
                    <label for="formGroupExampleInput2">PRECIO</label>
                    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input"/>
                </div>
            </form>
            <div class="btn-group btn-group-toggle" data-toggle="buttons">
            <label class="btn btn-secondary active">
                <input type="radio" name="options" id="option1" autocomplete="off" checked/> AGREGAR
            </label>
            <label class="btn btn-secondary">
                <input type="radio" name="options" id="option2" autocomplete="off"/> BORRAR
            </label>
            </div>
        </div>
    )
};

export default NewCard;