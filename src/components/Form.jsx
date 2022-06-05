
export default function From() {

    return (
        <section>
            <form className="labels">
                <label>
                    <input name="author" type="text" placeholder="Author" />
                </label>
                <label>
                    <input name="source" type="text" placeholder="Source" />
                </label>
                <label>
                    <input className="quote-input" name="quote" type="textarea" placeholder="Quote" />
                </label>
            </form>
        </section>
    )
}