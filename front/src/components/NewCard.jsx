const NewCard = () => {
    return (
        <div class="card" style="width: 100%">
            <img src={product.image} class="card-img-top" alt={product.title}/> 
            <div class="card-body">
            <p class="card-text">{product.description}</p>
            </div>
            <div class="card-body1">
            <p class="card-text2">{product.price}</p>
            </div>
        <form>
            <div class="form-group">
                <label for="formGroupExampleInput">Ingrese imagen</label>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text">Upload</span>
                    </div>
                    <div class="custom-file">
                        <input type="file" class="custom-file-input" id="inputGroupFile01"/>
                        <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
                    </div>
                </div>
            </div>
            <div class="form-group">
                <label for="formGroupExampleInput2">Nombre del producto</label>
                <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input"/>
            </div>
            <div class="form-group">
                <label for="exampleFormControlTextarea1">Breve descripción del producto</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text">$</span>
                </div>
                <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)"/>
            </div>
        </form>
        </div>
    )
};

export default NewCard;