<script type="text/javascript">
document.getElementById("burger-menu").style.display="none";
function ReverseHamburgerMenuDisplay()
{
   var id = document.getElementById("burger-menu");
   if( id.style.display == "none" ) { id.style.display = "block"; }
   else { id.style.display = "none"; }
}
function HamburgerMenuItemOver(id) { id.style.backgroundColor = "#efefef"; }
function HamburgerMenuItemOut(id) { id.style.backgroundColor = "#fff"; }
</script>

