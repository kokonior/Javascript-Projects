<script>
  function select_sub(mn_id, no_menu_sub) {
    var count_sub_menu = $('.count_sub_menu').val();
    var count_sub_menu_checked = $('input:checkbox.sub_menu:checked').length
    for (let i = 0; i <= count_sub_menu; i++) {
        if(count_sub_menu_checked == 0){
            $('#child-'+mn_id+'-'+no_menu_sub+'-'+i).prop('checked', false);
            $('#mn-'+mn_id).prop('checked', false);
        }
        else {
            $('#child-'+mn_id+'-'+no_menu_sub+'-'+i).prop('checked', true);
            $('#mn-'+mn_id).prop('checked', true);
        }
    }
}
</script>
