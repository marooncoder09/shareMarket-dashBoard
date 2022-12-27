export default function Form({ fields, onSubmit, children, ...props }) {
    const handleSubmit = e => {
        e.preventDefault();
        const formData = new FormData(e.target);

        onSubmit(formData, e);
    };

    return (
        <form onSubmit={handleSubmit} className='form' {...props}>
            {children}
        </form>
    )
}