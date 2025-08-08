// Texto exacto del documento, con saltos de línea preservados.
// Puedes actualizar la fecha si corresponde, lo demás queda igual.
const TEXTO = `Buenos días mi Coronel, depto. p3: 04-08-2025

PLANA MAYOR

TTE. CNEL. (I)\tKAREN NEUBAUER MEZA
S.O.M (SEC.) LL. SS\tRICARDO QUILAQUEO MARTIN
CARABINERO (A.O)\tCONSTANZA CATALAN ORTIZ
C.P.R. (ARCHIVERO)\tHECTOR EPUÑAN MARTINEZ
C.P.R. (ESTAFETA)\tVICTOR REBOLLEDO SALINAS

SECCIÓN COMISIONADOS INSTITUCIONALES

MAYOR (I)\tPATRICIO CONTRERAS SEVERINO
CAPITÁN\tDANIELA MONJE GRANDJEAN
SGTO. 1RO.\tFABIOLA SOTO ASTARGO
CABO 2°   \tNATALIA HUILCAMAN COILLA
C.P.R.\tJORGE PIMIENTO ARIAS
C.P.R.\tFRANCISCA MOYA ARMIJO 
C.P.R.\tALEXIS MORALES SILVA
SGTO.  2° (SEC.)\t\tLUIS LOVAZZANO FIGUEROA

SECCIÓN COMPRAS Y CONTROL PRESUPUESTARIO

CAPITÁN (I)\tMARILYN KLEIN HERNANDEZ 
SOM (LL. SS)\tFRANCISCO MARIN HENRIQUEZ 
SGTO. 2° (A.O)\tRODRIGO SEPULVEDA TORRES 
CABO 1RO (SEC)\tDAYNA CASTRO FERNANDEZ 
C.P.R.\tJOSÉ CARRASCO GONZÁLEZ

SECCIÓN GESTIÓN FINANCIERA 

CAPITAN (I)\tSLOMITH SERRANO BRIONES
SOM (SEC.)\tINRRY BELTRAN CASTILLO
SOM (LLSS)\tBOLIVAR CARRASCO CARRASCO
SUBOF. (SEC.)\tMARIA BUSTOS MENDOZA
SGTO. 1° (SEC.)\tVITALIA GARVIZO FUENTES
SGTO. 1° (SEC.)\tJESSICA VARGAS SAN MARTIN
SGTO. 1° (SEC.)\tDANIEL MARTINEZ GAETE 
SGTO. 2° (SEC)\tFRANCISCO GODOY RODRIGUEZ
SGTO. 2° (AUX. CONT.)\tEVELYN SALAZAR ACEVEDO
SGTO. 2°. (SEC.)\tSOLANGE JAUNEAUD RIOS 
CABO 1° (SEC.)\tKAROLL CIFUENTES VINET 
CABO 1° (SEC.)\tJEAN AGUILERA CORDERO 
C.P.R.\tEMILIO\tJELVES CAMPUSANO
C.P.R.\tRICARDO ROA TAPIA
C.P.R.\tANGELICA BAEZA LARA 
C.P.R. \tTAVITA CARRASCO GUAJARDO
C.P.R.\tESTEBAN LIZAMA TORRES 
C.P.R.\tGUSTAVO GRANDON FLORES 
C.P.R.\tRICARDO FUENTES NUÑEZ 
C.P.R.\tMILDRED GAHONA CORTEZ 
C.P.R.\tMARIA SOTO MEDEL 
C.P.R.\tLISSETE CARVAJAL ALIAGA 
CABO 1°\tGRACIELA MARTINEZ BARCO 

SECCIÓN PERSONAL LESIONADO EN ACTOS DEL SERVICIO

CAPITAN\tJAVIERA MONTERO TOLEDO 
SGTO. 2° (A.O)\tLORENA SALDIAS PEÑA
CPR\tMARIA RAMIREZ CALDERON
SGTO. 2° \tNICOLE GONZALEZ LEYTON`;

const $textarea = document.getElementById('mensaje');
const $btnWhats = document.getElementById('btn-whatsapp');
const $btnCopiar = document.getElementById('btn-copiar');
const $hoy = document.getElementById('hoy');

function formateaFechaHoy(){
  const d = new Date();
  const pad = n => String(n).padStart(2,'0');
  return `${pad(d.getDate())}-${pad(d.getMonth()+1)}-${d.getFullYear()}`;
}

function abrirWhatsApp(texto){
  const url = `https://wa.me/?text=${encodeURIComponent(texto)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}

// Inicializa la vista
$textarea.value = TEXTO;
$hoy.textContent = `Actualizado: ${formateaFechaHoy()}`;

// Eventos
$btnWhats.addEventListener('click', () => {
  const texto = $textarea.value.trim();
  if(!texto){
    alert('No hay contenido para enviar.');
    return;
  }
  abrirWhatsApp(texto);
});

$btnCopiar.addEventListener('click', async () => {
  try{
    await navigator.clipboard.writeText($textarea.value);
    $btnCopiar.textContent = '¡Copiado!';
    setTimeout(()=> $btnCopiar.textContent = 'Copiar texto', 1200);
  }catch(e){
    alert('No se pudo copiar. Copia manualmente.');
  }
});
