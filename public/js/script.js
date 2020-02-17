$('#add').click(async () => {
        
    const newBurger = $('#newBurger').val();

    console.log(newBurger);
    
    await $.ajax({
        method: 'POST',
        url: `/api/burger/newburger`,
        data: {
            name: newBurger
        }
    });
location.reload();
})


$('.devour').click(async (target) => {
const currentTarget = $(target.currentTarget);

const id = currentTarget.data('id');

await $.ajax({
    method: 'PUT',
    url: `/api/burger/${id}/devoured`
});

location.reload();
});