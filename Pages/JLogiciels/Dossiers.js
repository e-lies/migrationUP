//get dossiers from JLogiciels HTML's response
var refs = []
await fetch("https://jaime.jlogiciels.fr/main_tableur.php?table=UP_Dossiers&ajax=oui", {
  "headers": {
    "accept": "*/*",
    "accept-language": "fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7",
    "content-type": "text/html; charset=UTF-8",
    "sec-ch-ua": "\"Google Chrome\";v=\"95\", \"Chromium\";v=\"95\", \";Not A Brand\";v=\"99\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin"
  },
  "referrer": "https://jaime.jlogiciels.fr/index.php",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": null,
  "method": "GET",
  "mode": "cors",
  "credentials": "include"
})
.then(prm=>prm.text())
.then(htm=>{
    var dossiers = document.createElement('div');
    dossiers.innerHTML = htm
    dossiers.querySelectorAll(".tableauCel input").forEach(r=>r.id.split('_').length === 2 ? refs.push(r.id.split('_')[1]) : false)
})

//response 
`<script type='text/javascript'>
clearTabFiltre();
tabFiltreAncien = cloneArray(tabFiltre);
</script>
<div class='piedPage' id='div_pied_de_page'>
<table width='100%' height='100%' cellpadding='2' cellspacing='0' border='1' class='piedPage' style='table-layout:fixed; position:absolute; top:0px; left:0px;'><tr><td width='500' style='empty-cells:show; overflow:hidden; white-space:nowrap;'><div align='left'><table class='tableau_pdp' border=0 cellspacing='5' cellpadding='0' ><tr><td>37 éléments trouvés</td></tr></table></div></td><td style='overflow:hidden; white-space:nowrap;'><span style='margin:0px; padding:2px; border:1px solid #C0C0C0;'>
S(Commandes HT)=6395.74
</span>
<span style='margin:0px; padding:2px; border:1px solid #C0C0C0;'>
S(Factures HT)=3702.63
</span>
</td><td width='150' style='overflow:hidden; white-space:nowrap;'><nobr><span id='_texteDate'>&nbsp;</span>&nbsp;&nbsp;<span id='_texteHeure'>&nbsp;</span>&nbsp;&nbsp;<span>frt-2</span></nobr></td></tr></table></div>
<div id='div_main_tableau' style='position:absolute;top:40px; left:200px;'>
<table border='0' cellpadding='3' class='control_tableur'>
<tr>
<td class='barreMenu'>
<table cellpadding='0' cellspacing='2' border='0' style='margin:-2px; padding:0px;'>
<tr>
<td class='BoutonMenuOff' onmouseover="javascript:this.className='BoutonMenuOn';" onmouseout="javascript:this.className='BoutonMenuOff';" onMouseDown="javascript:this.className='BoutonMenuClick';" onMouseUp="javascript:this.className='BoutonMenuOn';" onClick="javascript:OuvreElement('fenetre_element.php?creation=OUI&modeIHM=FENETRE','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '');">
<img src='images/2016/Icones/nouveau.png' alt='' border='0' style='vertical-align:middle;'><br>
Nouveau
</td>
<td class='BoutonMenuOffAvecSousMenu' onmouseover="javascript:this.className='BoutonMenuOnAvecSousMenu';document.getElementById('SousMenuFiltre').className = 'BoutonSousMenuOn';" onmouseout="javascript:this.className='BoutonMenuOffAvecSousMenu';document.getElementById('SousMenuFiltre').className = 'BoutonSousMenuOff';" onMouseDown="javascript:this.className='BoutonMenuClickAvecSousMenu';" onMouseUp="javascript:this.className='BoutonMenuOnAvecSousMenu';">
<table border='0' width='100%' cellpadding='0' cellspacing='0' style='padding:0px; margin:0px; border-collapse:collapse;'>
<tr>
<td align='center' valign='middle' class='BoutonMenuAvecSousMenu' onClick="javascript:chargeUrlDansDivCentre('fenetre_filtre.php','fenetreFiltre');">
<img src='images/2016/Icones/filtrer.png' alt='' border='0' style='vertical-align:middle;'><br>
Filtrer
</td>
<td align='center' valign='middle' id='SousMenuFiltre' class='BoutonSousMenuOff' onMouseDown="javascript:this.className='BoutonSousMenuClick';" onMouseUp="javascript:this.className='BoutonSousMenuOn';" onClick="javascript:ouvrirMenu('menuFiltre', 'tablePopup_Filtrer');">
<img src='images/fleche_bas_menu.png' style='vertical-align:middle;' alt='' border='0'>
<div id='menuFiltre' class='menuPopup'>
<table id='tablePopup_Filtrer' class='table_popup_menu' height='100%' width='200' border='0' cellpadding='1' cellspacing='0' style='min-width:200px;'>
<tr style='height:22px;' onMouseDown="javascript:document.forms.desactive_filtre.submit();" onMouseOver="javascript:survolMenu('desactiveFiltre', 'ON');" onMouseOut="javascript:survolMenu('desactiveFiltre', 'OFF');">
<td id='desactiveFiltre_g' width='26' class='menuPopupG'>
</td>
<td id='desactiveFiltre_m' class='menuPopup'>
<form name='desactive_filtre' method='post' action='index.php' style='display:inline;'>
<input type='hidden' name='NoMfOrMuLaIrE' value='desactive_filtre'>
<nobr>Désactiver tous les filtres</nobr>
</form>
</td>
<td id='desactiveFiltre_d' width='3' class='menuPopupD'>
</td>
</tr>
</table>
</div>
</td>
</tr>
</table>
</td>
<td class='BoutonMenuOff' onmouseover="javascript:this.className='BoutonMenuOn';" onmouseout="javascript:this.className='BoutonMenuOff';" onMouseDown="javascript:this.className='BoutonMenuClick';" onMouseUp="javascript:this.className='BoutonMenuOn';" onClick="javascript:chargeUrlDansDivCentre('fenetre_rechercher.php', 'fenetreRecherche');">
<img src='images/2016/Icones/chercher.png' alt='' border='0' style='vertical-align:middle;'><br>
Chercher
</td>
<td class='BoutonMenuOffAvecSousMenu' onmouseover="javascript:this.className='BoutonMenuOnAvecSousMenu';document.getElementById('SousMenuOutils').className = 'BoutonSousMenuOn';" onmouseout="javascript:this.className='BoutonMenuOffAvecSousMenu';document.getElementById('SousMenuOutils').className = 'BoutonSousMenuOff';" onMouseDown="javascript:this.className='BoutonMenuClickAvecSousMenu';" onMouseUp="javascript:this.className='BoutonMenuOnAvecSousMenu';">
<table border='0' width='100%' cellpadding='0' cellspacing='0' style='padding:0px; margin:0px; border-collapse:collapse; empty-cells:show;'>
<tr>
<td align='center' valign='middle' class='BoutonMenuAvecSousMenu' onClick="javascript:ouvrirMenu('menuOutils', 'tablePopup_outils');">
<img src='images/2016/Icones/fonctions.png' alt='' border='0' style='vertical-align:middle;'><br>
Fonctions
</td>
<td align='center' valign='middle' id='SousMenuOutils' class='BoutonSousMenuOff' onMouseDown="javascript:this.className='BoutonSousMenuClick';" onMouseUp="javascript:this.className='BoutonSousMenuOn';" onClick="javascript:ouvrirMenu('menuOutils', 'tablePopup_outils');">
<img src='images/fleche_bas_menu.png' alt='' style='vertical-align:middle;' border='0'>
<div id='menuOutils' class='menuPopup'>
<table id='tablePopup_outils' class='table_popup_menu' height='100%' border='0' cellpadding='1' cellspacing='0' style='min-width:200px;'>
<tr onMouseDown="javascript:chargeUrlDansDiv('colonnesAffichees.php','fenetreColonnesAffichees');" style='height:22px;' onMouseOver="javascript:survolMenu('outils_1', 'ON');" onMouseOut="javascript:survolMenu('outils_1', 'OFF');">
<td id='outils_1_g' width='28' style="empty-cells:show; width:28px;" class='menuPopupG'>
</td>
<td id='outils_1_m' class='menuPopup'>
<nobr>Colonnes affichées</nobr>
</td>
<td id='outils_1_d' width='3' style='empty-cells:show; width:3px;' class='menuPopupD'>
</td>
</tr>
</table>
</div>
</td>
</tr>
</table>
</td>
<td class='BoutonMenuOffAvecSousMenu' onmouseover="javascript:this.className='BoutonMenuOnAvecSousMenu';document.getElementById('SousMenuImpDoc').className = 'BoutonSousMenuOn';" onmouseout="javascript:this.className='BoutonMenuOffAvecSousMenu';document.getElementById('SousMenuImpDoc').className = 'BoutonSousMenuOff';" onMouseDown="javascript:this.className='BoutonMenuClickAvecSousMenu';" onMouseUp="javascript:this.className='BoutonMenuOnAvecSousMenu';">
<table border='0' width='100%' cellpadding='0' cellspacing='0' style='padding:0px; margin:0px; border-collapse:collapse; empty-cells:show;'>
<tr>
<td align='center' valign='middle' class='BoutonMenuAvecSousMenu' onClick="javascript:ImpressionDoc('', '', '-1');">
<img src='images/2016/Icones/imprimer.png' alt='' border='0' style='vertical-align:middle;'><br>
Aperçu
</td>
<td align='center' valign='middle' id='SousMenuImpDoc' class='BoutonSousMenuOff' onMouseDown="javascript:this.className='BoutonSousMenuClick';" onMouseUp="javascript:this.className='BoutonSousMenuOn';" onClick="javascript:ouvrirMenu('menuImpDoc', 'tablePopup_ImpDoc');">
<img src='images/fleche_bas_menu.png' alt='' style='vertical-align:middle;' border='0'>
<div id='menuImpDoc' class='menuPopup'>
<table id='tablePopup_ImpDoc' class='table_popup_menu' height='100%' border='0' cellpadding='1' cellspacing='0' style='min-width:200px;'>
<tr onMouseDown="javascript:ImpressionDoc('', '', '4644');" style='height:22px;' onMouseOver="javascript:survolMenu('ImpDoc_4644', 'ON');" onMouseOut="javascript:survolMenu('ImpDoc_4644', 'OFF');">
<td id='ImpDoc_4644_g' width='28' style="empty-cells:show; width:28px;" class='menuPopupG'>
<img src='icones/crayon.png' border='0' title='Document modifiable dans le module Paramètres'></td>
<td id='ImpDoc_4644_m' class='menuPopup'>
<nobr>Fiche Dossier</nobr>
</td>
<td id='ImpDoc_4644_d' width='3' style='empty-cells:show; width:3px;' class='menuPopupD'>
</td>
</tr>
<tr onMouseDown="javascript:ImpressionDoc('', '', '4563');" style='height:22px;' onMouseOver="javascript:survolMenu('ImpDoc_4563', 'ON');" onMouseOut="javascript:survolMenu('ImpDoc_4563', 'OFF');">
<td id='ImpDoc_4563_g' width='28' style="empty-cells:show; width:28px;" class='menuPopupG'>
<img src='icones/crayon.png' border='0' title='Document modifiable dans le module Paramètres'></td>
<td id='ImpDoc_4563_m' class='menuPopup'>
<nobr>DOMUS Bordereaux suivi de travaux (en cours de dev)</nobr>
</td>
<td id='ImpDoc_4563_d' width='3' style='empty-cells:show; width:3px;' class='menuPopupD'>
</td>
</tr>
<tr onMouseDown="javascript:ImpressionDoc('', '', '');" style='height:22px;' onMouseOver="javascript:survolMenu('ImpDoc_0', 'ON');" onMouseOut="javascript:survolMenu('ImpDoc_0', 'OFF');">
<td id='ImpDoc_0_g' width='28' style="empty-cells:show; width:28px;" class='menuPopupG'>
<img src='icones/list.png' border='0' title='Impression multi documents'></td>
<td id='ImpDoc_0_m' class='menuPopup'>
<nobr>Choix multiple</nobr>
</td>
<td id='ImpDoc_0_d' width='3' style='empty-cells:show; width:3px;' class='menuPopupD'>
</td>
</tr>
</table>
</div>
</td>
</tr>
</table>
</td>
</tr>
</table>
<img border='0' onclick="javascript:allerA('?fermerTable=oui')" alt='' style='vertical-align: top; cursor: pointer; position:absolute; top:5px; right:5px;' src='flaticons/bouton_fermer.png'>
</td>
</tr>
<tr>
<td class='control_tableur'>
<div id='div_donnees_tableau_Entete' width='1000' style='width:1000px; overflow: hidden; padding:0px; margin:0px;'>
<table border='1' cellpadding='3' class='tableau' id='tableau_principal' style='width:1810px; '>
<tr>
<td class='titre' style='width:16px;  padding:0px; margin:0px;'>
</td>
<td style='padding:0px; margin:0px; height:20px; padding-left:6px !important;' id='CoLoNnE_Reference' width='130px' class='titreCourant' align='center' onMouseOver="javascript:survolTitreColonne(this, 'titreCourant', '', 'Reference');" onMouseOut="javascript:survolTitreColonne(this, 'titreCourant', 'none', 'Reference');">
<table style='color: inherit; width:100%; margin:0px; padding:0px; border-width:0px; table-layout:fixed;' border='0' cellspacing='0' cellpadding='0'>
<tr>
<td style='overflow:hidden; white-space:nowrap;' oncontextmenu="javascript:clickTitreTableau();return false;">
<table width='100%' align='center' border='0' style='color: inherit; margin:0px; padding:0px; table-layout: Fixed;'>
<tr>
<td align='center' style='overflow:hidden; white-space:nowrap;' title="">
<div style='display:block;' onClick="javascript:aff_liste('Reference');">Référence</div>
<img id='fleche_filtreRapide_Reference' class='filtreRapide' style='display:none;' src='images/fleche_filtre_rapide.png' onClick="ouvrirPopupFiltreRapide('Reference');">
<div id='filtreRapide_Reference' style='position:absolute; display:none; z-index:1000;'>
</div>
</td>
</tr>
</table>
</td>
<td width='3' align='right' class='Resizor' onmousedown="javascript:setPosition(event, 'tableau_principal');" onmouseover="javascript:setResizeColumns('CoLoNnE_Reference', '12');">
</td>
</tr>
</table>
</td>
<td style='padding:0px; margin:0px; height:20px; padding-left:6px !important;' id='CoLoNnE_DateCreation' width='58.5px' class='titre' align='center' onMouseOver="javascript:survolTitreColonne(this, 'titreCourant', '', 'DateCreation');" onMouseOut="javascript:survolTitreColonne(this, 'titre', 'none', 'DateCreation');">
<table style='color: inherit; width:100%; margin:0px; padding:0px; border-width:0px; table-layout:fixed;' border='0' cellspacing='0' cellpadding='0'>
<tr>
<td style='overflow:hidden; white-space:nowrap;' oncontextmenu="javascript:clickTitreTableau();return false;">
<table width='100%' align='center' border='0' style='color: inherit; margin:0px; padding:0px; table-layout: Fixed;'>
<tr>
<td align='center' style='overflow:hidden; white-space:nowrap;' title="">
<div style='display:block;' onClick="javascript:aff_liste('DateCreation');">Date création</div>
<img id='fleche_filtreRapide_DateCreation' class='filtreRapide' style='display:none;' src='images/fleche_filtre_rapide.png' onClick="ouvrirPopupFiltreRapide('DateCreation');">
<div id='filtreRapide_DateCreation' style='position:absolute; display:none; z-index:1000;'>
</div>
</td>
</tr>
</table>
</td>
<td width='3' align='right' class='Resizor' onmousedown="javascript:setPosition(event, 'tableau_principal');" onmouseover="javascript:setResizeColumns('CoLoNnE_DateCreation', '12');">
</td>
</tr>
</table>
</td>
<td style='padding:0px; margin:0px; height:20px; padding-left:6px !important;' id='CoLoNnE_TypeSinistre' width='130px' class='titre' align='center' onMouseOver="javascript:survolTitreColonne(this, 'titreCourant', '', 'TypeSinistre');" onMouseOut="javascript:survolTitreColonne(this, 'titre', 'none', 'TypeSinistre');">
<table style='color: inherit; width:100%; margin:0px; padding:0px; border-width:0px; table-layout:fixed;' border='0' cellspacing='0' cellpadding='0'>
<tr>
<td style='overflow:hidden; white-space:nowrap;' oncontextmenu="javascript:clickTitreTableau();return false;">
<table width='100%' align='center' border='0' style='color: inherit; margin:0px; padding:0px; table-layout: Fixed;'>
<tr>
<td align='center' style='overflow:hidden; white-space:nowrap;' title="">
<div style='display:block;' onClick="javascript:aff_liste('TypeSinistre');">Type sinistre</div>
<img id='fleche_filtreRapide_TypeSinistre' class='filtreRapide' style='display:none;' src='images/fleche_filtre_rapide.png' onClick="ouvrirPopupFiltreRapide('TypeSinistre');">
<div id='filtreRapide_TypeSinistre' style='position:absolute; display:none; z-index:1000;'>
</div>
</td>
</tr>
</table>
</td>
<td width='3' align='right' class='Resizor' onmousedown="javascript:setPosition(event, 'tableau_principal');" onmouseover="javascript:setResizeColumns('CoLoNnE_TypeSinistre', '12');">
</td>
</tr>
</table>
</td>
<td style='padding:0px; margin:0px; height:20px; padding-left:6px !important;' id='CoLoNnE_CodeRegion' width='32.5px' class='titre' align='center' onMouseOver="javascript:survolTitreColonne(this, 'titreCourant', '', 'CodeRegion');" onMouseOut="javascript:survolTitreColonne(this, 'titre', 'none', 'CodeRegion');">
<table style='color: inherit; width:100%; margin:0px; padding:0px; border-width:0px; table-layout:fixed;' border='0' cellspacing='0' cellpadding='0'>
<tr>
<td style='overflow:hidden; white-space:nowrap;' oncontextmenu="javascript:clickTitreTableau();return false;">
<table width='100%' align='center' border='0' style='color: inherit; margin:0px; padding:0px; table-layout: Fixed;'>
<tr>
<td align='center' style='overflow:hidden; white-space:nowrap;' title="">
<div style='display:block;' onClick="javascript:aff_liste('CodeRegion');">Code</div>
<img id='fleche_filtreRapide_CodeRegion' class='filtreRapide' style='display:none;' src='images/fleche_filtre_rapide.png' onClick="ouvrirPopupFiltreRapide('CodeRegion');">
<div id='filtreRapide_CodeRegion' style='position:absolute; display:none; z-index:1000;'>
</div>
</td>
</tr>
</table>
</td>
<td width='3' align='right' class='Resizor' onmousedown="javascript:setPosition(event, 'tableau_principal');" onmouseover="javascript:setResizeColumns('CoLoNnE_CodeRegion', '12');">
</td>
</tr>
</table>
</td>
<td style='padding:0px; margin:0px; height:20px; padding-left:6px !important;' id='CoLoNnE_Etat' width='130px' class='titre' align='center' onMouseOver="javascript:survolTitreColonne(this, 'titreCourant', '', 'Etat');" onMouseOut="javascript:survolTitreColonne(this, 'titre', 'none', 'Etat');">
<table style='color: inherit; width:100%; margin:0px; padding:0px; border-width:0px; table-layout:fixed;' border='0' cellspacing='0' cellpadding='0'>
<tr>
<td style='overflow:hidden; white-space:nowrap;' oncontextmenu="javascript:clickTitreTableau();return false;">
<table width='100%' align='center' border='0' style='color: inherit; margin:0px; padding:0px; table-layout: Fixed;'>
<tr>
<td align='center' style='overflow:hidden; white-space:nowrap;' title="">
<div style='display:block;' onClick="javascript:aff_liste('Etat');">Etat dossier</div>
<img id='fleche_filtreRapide_Etat' class='filtreRapide' style='display:none;' src='images/fleche_filtre_rapide.png' onClick="ouvrirPopupFiltreRapide('Etat');">
<div id='filtreRapide_Etat' style='position:absolute; display:none; z-index:1000;'>
</div>
</td>
</tr>
</table>
</td>
<td width='3' align='right' class='Resizor' onmousedown="javascript:setPosition(event, 'tableau_principal');" onmouseover="javascript:setResizeColumns('CoLoNnE_Etat', '12');">
</td>
</tr>
</table>
</td>
<td style='padding:0px; margin:0px; height:20px; padding-left:6px !important;' id='CoLoNnE_NomPrenom' width='162.5px' class='titre' align='center' onMouseOver="javascript:survolTitreColonne(this, 'titreCourant', '', 'NomPrenom');" onMouseOut="javascript:survolTitreColonne(this, 'titre', 'none', 'NomPrenom');">
<table style='color: inherit; width:100%; margin:0px; padding:0px; border-width:0px; table-layout:fixed;' border='0' cellspacing='0' cellpadding='0'>
<tr>
<td style='overflow:hidden; white-space:nowrap;' oncontextmenu="javascript:clickTitreTableau();return false;">
<table width='100%' align='center' border='0' style='color: inherit; margin:0px; padding:0px; table-layout: Fixed;'>
<tr>
<td align='center' style='overflow:hidden; white-space:nowrap;' title="">
<div style='display:block;' onClick="javascript:aff_liste('NomPrenom');">Client</div>
<img id='fleche_filtreRapide_NomPrenom' class='filtreRapide' style='display:none;' src='images/fleche_filtre_rapide.png' onClick="ouvrirPopupFiltreRapide('NomPrenom');">
<div id='filtreRapide_NomPrenom' style='position:absolute; display:none; z-index:1000;'>
</div>
</td>
</tr>
</table>
</td>
<td width='3' align='right' class='Resizor' onmousedown="javascript:setPosition(event, 'tableau_principal');" onmouseover="javascript:setResizeColumns('CoLoNnE_NomPrenom', '12');">
</td>
</tr>
</table>
</td>
<td style='padding:0px; margin:0px; height:20px; padding-left:6px !important;' id='CoLoNnE_VilLivr' width='143px' class='titre' align='center' onMouseOver="javascript:survolTitreColonne(this, 'titreCourant', '', 'VilLivr');" onMouseOut="javascript:survolTitreColonne(this, 'titre', 'none', 'VilLivr');">
<table style='color: inherit; width:100%; margin:0px; padding:0px; border-width:0px; table-layout:fixed;' border='0' cellspacing='0' cellpadding='0'>
<tr>
<td style='overflow:hidden; white-space:nowrap;' oncontextmenu="javascript:clickTitreTableau();return false;">
<table width='100%' align='center' border='0' style='color: inherit; margin:0px; padding:0px; table-layout: Fixed;'>
<tr>
<td align='center' style='overflow:hidden; white-space:nowrap;' title="">
<div style='display:block;' onClick="javascript:aff_liste('VilLivr');">Ville risque</div>
<img id='fleche_filtreRapide_VilLivr' class='filtreRapide' style='display:none;' src='images/fleche_filtre_rapide.png' onClick="ouvrirPopupFiltreRapide('VilLivr');">
<div id='filtreRapide_VilLivr' style='position:absolute; display:none; z-index:1000;'>
</div>
</td>
</tr>
</table>
</td>
<td width='3' align='right' class='Resizor' onmousedown="javascript:setPosition(event, 'tableau_principal');" onmouseover="javascript:setResizeColumns('CoLoNnE_VilLivr', '12');">
</td>
</tr>
</table>
</td>
<td style='padding:0px; margin:0px; height:20px; padding-left:6px !important;' id='CoLoNnE_AssurNomPrenom' width='162.5px' class='titre' align='center' onMouseOver="javascript:survolTitreColonne(this, 'titreCourant', '', 'AssurNomPrenom');" onMouseOut="javascript:survolTitreColonne(this, 'titre', 'none', 'AssurNomPrenom');">
<table style='color: inherit; width:100%; margin:0px; padding:0px; border-width:0px; table-layout:fixed;' border='0' cellspacing='0' cellpadding='0'>
<tr>
<td style='overflow:hidden; white-space:nowrap;' oncontextmenu="javascript:clickTitreTableau();return false;">
<table width='100%' align='center' border='0' style='color: inherit; margin:0px; padding:0px; table-layout: Fixed;'>
<tr>
<td align='center' style='overflow:hidden; white-space:nowrap;' title="">
<div style='display:block;' onClick="javascript:aff_liste('AssurNomPrenom');">Nom Assurance</div>
<img id='fleche_filtreRapide_AssurNomPrenom' class='filtreRapide' style='display:none;' src='images/fleche_filtre_rapide.png' onClick="ouvrirPopupFiltreRapide('AssurNomPrenom');">
<div id='filtreRapide_AssurNomPrenom' style='position:absolute; display:none; z-index:1000;'>
</div>
</td>
</tr>
</table>
</td>
<td width='3' align='right' class='Resizor' onmousedown="javascript:setPosition(event, 'tableau_principal');" onmouseover="javascript:setResizeColumns('CoLoNnE_AssurNomPrenom', '12');">
</td>
</tr>
</table>
</td>
<td style='padding:0px; margin:0px; height:20px; padding-left:6px !important;' id='CoLoNnE_DateSinistre' width='65px' class='titre' align='center' onMouseOver="javascript:survolTitreColonne(this, 'titreCourant', '', 'DateSinistre');" onMouseOut="javascript:survolTitreColonne(this, 'titre', 'none', 'DateSinistre');">
<table style='color: inherit; width:100%; margin:0px; padding:0px; border-width:0px; table-layout:fixed;' border='0' cellspacing='0' cellpadding='0'>
<tr>
<td style='overflow:hidden; white-space:nowrap;' oncontextmenu="javascript:clickTitreTableau();return false;">
<table width='100%' align='center' border='0' style='color: inherit; margin:0px; padding:0px; table-layout: Fixed;'>
<tr>
<td align='center' style='overflow:hidden; white-space:nowrap;' title="">
<div style='display:block;' onClick="javascript:aff_liste('DateSinistre');">Date sinistre</div>
<img id='fleche_filtreRapide_DateSinistre' class='filtreRapide' style='display:none;' src='images/fleche_filtre_rapide.png' onClick="ouvrirPopupFiltreRapide('DateSinistre');">
<div id='filtreRapide_DateSinistre' style='position:absolute; display:none; z-index:1000;'>
</div>
</td>
</tr>
</table>
</td>
<td width='3' align='right' class='Resizor' onmousedown="javascript:setPosition(event, 'tableau_principal');" onmouseover="javascript:setResizeColumns('CoLoNnE_DateSinistre', '12');">
</td>
</tr>
</table>
</td>
<td style='padding:0px; margin:0px; height:20px; padding-left:6px !important;' id='CoLoNnE_Exp1NomPrenom' width='162.5px' class='titre' align='center' onMouseOver="javascript:survolTitreColonne(this, 'titreCourant', '', 'Exp1NomPrenom');" onMouseOut="javascript:survolTitreColonne(this, 'titre', 'none', 'Exp1NomPrenom');">
<table style='color: inherit; width:100%; margin:0px; padding:0px; border-width:0px; table-layout:fixed;' border='0' cellspacing='0' cellpadding='0'>
<tr>
<td style='overflow:hidden; white-space:nowrap;' oncontextmenu="javascript:clickTitreTableau();return false;">
<table width='100%' align='center' border='0' style='color: inherit; margin:0px; padding:0px; table-layout: Fixed;'>
<tr>
<td align='center' style='overflow:hidden; white-space:nowrap;' title="">
<div style='display:block;' onClick="javascript:aff_liste('Exp1NomPrenom');">Nom Expert Cie/Mut</div>
<img id='fleche_filtreRapide_Exp1NomPrenom' class='filtreRapide' style='display:none;' src='images/fleche_filtre_rapide.png' onClick="ouvrirPopupFiltreRapide('Exp1NomPrenom');">
<div id='filtreRapide_Exp1NomPrenom' style='position:absolute; display:none; z-index:1000;'>
</div>
</td>
</tr>
</table>
</td>
<td width='3' align='right' class='Resizor' onmousedown="javascript:setPosition(event, 'tableau_principal');" onmouseover="javascript:setResizeColumns('CoLoNnE_Exp1NomPrenom', '12');">
</td>
</tr>
</table>
</td>
<td style='padding:0px; margin:0px; height:20px; padding-left:6px !important;' id='CoLoNnE_Exp2NomPrenom' width='162.5px' class='titre' align='center' onMouseOver="javascript:survolTitreColonne(this, 'titreCourant', '', 'Exp2NomPrenom');" onMouseOut="javascript:survolTitreColonne(this, 'titre', 'none', 'Exp2NomPrenom');">
<table style='color: inherit; width:100%; margin:0px; padding:0px; border-width:0px; table-layout:fixed;' border='0' cellspacing='0' cellpadding='0'>
<tr>
<td style='overflow:hidden; white-space:nowrap;' oncontextmenu="javascript:clickTitreTableau();return false;">
<table width='100%' align='center' border='0' style='color: inherit; margin:0px; padding:0px; table-layout: Fixed;'>
<tr>
<td align='center' style='overflow:hidden; white-space:nowrap;' title="">
<div style='display:block;' onClick="javascript:aff_liste('Exp2NomPrenom');">Nom Expert Assuré</div>
<img id='fleche_filtreRapide_Exp2NomPrenom' class='filtreRapide' style='display:none;' src='images/fleche_filtre_rapide.png' onClick="ouvrirPopupFiltreRapide('Exp2NomPrenom');">
<div id='filtreRapide_Exp2NomPrenom' style='position:absolute; display:none; z-index:1000;'>
</div>
</td>
</tr>
</table>
</td>
<td width='3' align='right' class='Resizor' onmousedown="javascript:setPosition(event, 'tableau_principal');" onmouseover="javascript:setResizeColumns('CoLoNnE_Exp2NomPrenom', '12');">
</td>
</tr>
</table>
</td>
<td style='padding:0px; margin:0px; height:20px; padding-left:6px !important;' id='CoLoNnE_PlatefRaisonSociale' width='162.5px' class='titre' align='center' onMouseOver="javascript:survolTitreColonne(this, 'titreCourant', '', 'PlatefRaisonSociale');" onMouseOut="javascript:survolTitreColonne(this, 'titre', 'none', 'PlatefRaisonSociale');">
<table style='color: inherit; width:100%; margin:0px; padding:0px; border-width:0px; table-layout:fixed;' border='0' cellspacing='0' cellpadding='0'>
<tr>
<td style='overflow:hidden; white-space:nowrap;' oncontextmenu="javascript:clickTitreTableau();return false;">
<table width='100%' align='center' border='0' style='color: inherit; margin:0px; padding:0px; table-layout: Fixed;'>
<tr>
<td align='center' style='overflow:hidden; white-space:nowrap;' title="">
<div style='display:block;' onClick="javascript:aff_liste('PlatefRaisonSociale');">Nom Plateforme</div>
<img id='fleche_filtreRapide_PlatefRaisonSociale' class='filtreRapide' style='display:none;' src='images/fleche_filtre_rapide.png' onClick="ouvrirPopupFiltreRapide('PlatefRaisonSociale');">
<div id='filtreRapide_PlatefRaisonSociale' style='position:absolute; display:none; z-index:1000;'>
</div>
</td>
</tr>
</table>
</td>
<td width='3' align='right' class='Resizor' onmousedown="javascript:setPosition(event, 'tableau_principal');" onmouseover="javascript:setResizeColumns('CoLoNnE_PlatefRaisonSociale', '12');">
</td>
</tr>
</table>
</td>
<td style='padding:0px; margin:0px; height:20px; padding-left:6px !important;' id='CoLoNnE_TotalHTC' width='65px' class='titre' align='center' onMouseOver="javascript:survolTitreColonne(this, 'titreCourant', '', 'TotalHTC');" onMouseOut="javascript:survolTitreColonne(this, 'titre', 'none', 'TotalHTC');">
<table style='color: inherit; width:100%; margin:0px; padding:0px; border-width:0px; table-layout:fixed;' border='0' cellspacing='0' cellpadding='0'>
<tr>
<td style='overflow:hidden; white-space:nowrap;' oncontextmenu="javascript:clickTitreTableau();return false;">
<table width='100%' align='center' border='0' style='color: inherit; margin:0px; padding:0px; table-layout: Fixed;'>
<tr>
<td align='center' style='overflow:hidden; white-space:nowrap;' title="Total HT des commandes client">
<div style='display:block;' onClick="javascript:aff_liste('TotalHTC');">Commandes HT</div>
<img id='fleche_filtreRapide_TotalHTC' class='filtreRapide' style='display:none;' src='images/fleche_filtre_rapide.png' onClick="ouvrirPopupFiltreRapide('TotalHTC');">
<div id='filtreRapide_TotalHTC' style='position:absolute; display:none; z-index:1000;'>
</div>
</td>
</tr>
</table>
</td>
<td width='3' align='right' class='Resizor' onmousedown="javascript:setPosition(event, 'tableau_principal');" onmouseover="javascript:setResizeColumns('CoLoNnE_TotalHTC', '12');">
</td>
</tr>
</table>
</td>
<td style='padding:0px; margin:0px; height:20px; padding-left:6px !important;' id='CoLoNnE_TotalHTF' width='65px' class='titre' align='center' onMouseOver="javascript:survolTitreColonne(this, 'titreCourant', '', 'TotalHTF');" onMouseOut="javascript:survolTitreColonne(this, 'titre', 'none', 'TotalHTF');">
<table style='color: inherit; width:100%; margin:0px; padding:0px; border-width:0px; table-layout:fixed;' border='0' cellspacing='0' cellpadding='0'>
<tr>
<td style='overflow:hidden; white-space:nowrap;' oncontextmenu="javascript:clickTitreTableau();return false;">
<table width='100%' align='center' border='0' style='color: inherit; margin:0px; padding:0px; table-layout: Fixed;'>
<tr>
<td align='center' style='overflow:hidden; white-space:nowrap;' title="Total HT des factures">
<div style='display:block;' onClick="javascript:aff_liste('TotalHTF');">Factures HT</div>
<img id='fleche_filtreRapide_TotalHTF' class='filtreRapide' style='display:none;' src='images/fleche_filtre_rapide.png' onClick="ouvrirPopupFiltreRapide('TotalHTF');">
<div id='filtreRapide_TotalHTF' style='position:absolute; display:none; z-index:1000;'>
</div>
</td>
</tr>
</table>
</td>
<td width='3' align='right' class='Resizor' onmousedown="javascript:setPosition(event, 'tableau_principal');" onmouseover="javascript:setResizeColumns('CoLoNnE_TotalHTF', '12');">
</td>
</tr>
</table>
</td>
<td style='padding:0px; margin:0px; height:20px; padding-left:6px !important;' id='CoLoNnE_AgenceClientRaisonSociale' width='162.5px' class='titre' align='center' onMouseOver="javascript:survolTitreColonne(this, 'titreCourant', '', 'AgenceClientRaisonSociale');" onMouseOut="javascript:survolTitreColonne(this, 'titre', 'none', 'AgenceClientRaisonSociale');">
<table style='color: inherit; width:100%; margin:0px; padding:0px; border-width:0px; table-layout:fixed;' border='0' cellspacing='0' cellpadding='0'>
<tr>
<td style='overflow:hidden; white-space:nowrap;' oncontextmenu="javascript:clickTitreTableau();return false;">
<table width='100%' align='center' border='0' style='color: inherit; margin:0px; padding:0px; table-layout: Fixed;'>
<tr>
<td align='center' style='overflow:hidden; white-space:nowrap;' title="">
<div style='display:block;' onClick="javascript:aff_liste('AgenceClientRaisonSociale');">Nom agence client</div>
<img id='fleche_filtreRapide_AgenceClientRaisonSociale' class='filtreRapide' style='display:none;' src='images/fleche_filtre_rapide.png' onClick="ouvrirPopupFiltreRapide('AgenceClientRaisonSociale');">
<div id='filtreRapide_AgenceClientRaisonSociale' style='position:absolute; display:none; z-index:1000;'>
</div>
</td>
</tr>
</table>
</td>
<td width='3' align='right' class='Resizor' onmousedown="javascript:setPosition(event, 'tableau_principal');" onmouseover="javascript:setResizeColumns('CoLoNnE_AgenceClientRaisonSociale', '12');">
</td>
</tr>
</table>
</td>
</tr>
</table>
</div>
<form id='formTableau' name='tableau' style='display:inline;'>
<div id='div_donnees_tableau' width='1000' style='width:1000px; overflow: auto;' onScroll="javascript:scrollTableauDonnees();">
<table border='1' cellpadding='3' class='tableau' id='tableau_principal2' style='width:1810px; '>
<tr class='valeur' onmouseover="javascript:changerClasseRow(this, 'valeurOn');" onmouseout="javascript:changerClasseRow(this, 'valeur');" id='ligne_120' >
<td class='tableauCel' style='width:16px;  padding:0px; margin:0px; vertical-align:middle; cursor:pointer;' onClick="javascript:SelectionneLigneOn('120', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=120','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '120');">
<img src='flaticons/ouvrir_fiche.png' style='width:16px;' alt='' border='0' id='loupeOverture120' style='vertical-align:middle;'>
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left' id='CoLoNnE_Reference2' width='130px' onClick="javascript:SelectionneLigne('120', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('120', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=120','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '120');">
<input type='checkbox' style='display:none;' id='checkbox_120' >
UP210022/MRS/DDE
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left' id='CoLoNnE_DateCreation2' width='58.5px' onClick="javascript:SelectionneLigne('120', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('120', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=120','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '120');">
26/10/21
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left' id='CoLoNnE_TypeSinistre2' width='130px' onClick="javascript:SelectionneLigne('120', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('120', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=120','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '120');">
Dégât des eaux
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left' id='CoLoNnE_CodeRegion2' width='32.5px' onClick="javascript:SelectionneLigne('120', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('120', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=120','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '120');">
MRS
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left' id='CoLoNnE_Etat2' width='130px' onClick="javascript:SelectionneLigne('120', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('120', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=120','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '120');">
Ouvert
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left' id='CoLoNnE_NomPrenom2' width='162.5px' onClick="javascript:SelectionneLigne('120', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('120', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=120','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '120');">
CABINET YASSIME
</td>
<td class='tableauCel' style='overflow:hidden; background-color:#DDDDDD; color:#000000;   white-space:nowrap;' align='left' id='CoLoNnE_VilLivr2' width='143px' onClick="javascript:SelectionneLigne('120', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('120', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=120','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '120');">
Paris
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left' id='CoLoNnE_AssurNomPrenom2' width='162.5px' onClick="javascript:SelectionneLigne('120', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('120', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=120','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '120');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left' id='CoLoNnE_DateSinistre2' width='65px' onClick="javascript:SelectionneLigne('120', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('120', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=120','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '120');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left' id='CoLoNnE_Exp1NomPrenom2' width='162.5px' onClick="javascript:SelectionneLigne('120', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('120', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=120','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '120');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left' id='CoLoNnE_Exp2NomPrenom2' width='162.5px' onClick="javascript:SelectionneLigne('120', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('120', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=120','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '120');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left' id='CoLoNnE_PlatefRaisonSociale2' width='162.5px' onClick="javascript:SelectionneLigne('120', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('120', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=120','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '120');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='right' id='CoLoNnE_TotalHTC2' width='65px' onClick="javascript:SelectionneLigne('120', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('120', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=120','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '120');">
0.00</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='right' id='CoLoNnE_TotalHTF2' width='65px' onClick="javascript:SelectionneLigne('120', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('120', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=120','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '120');">
0.00</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left' id='CoLoNnE_AgenceClientRaisonSociale2' width='162.5px' onClick="javascript:SelectionneLigne('120', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('120', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=120','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '120');">

</td>
</tr>
<tr class='valeur' onmouseover="javascript:changerClasseRow(this, 'valeurOn');" onmouseout="javascript:changerClasseRow(this, 'valeur');" id='ligne_118' >
<td class='tableauCel' style=' padding:0px; margin:0px; vertical-align:middle; cursor:pointer;' onClick="javascript:SelectionneLigneOn('118', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=118','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '118');">
<img src='flaticons/ouvrir_fiche.png' style='width:16px;' alt='' border='0' id='loupeOverture118' style='vertical-align:middle;'>
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('118', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('118', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=118','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '118');">
<input type='checkbox' style='display:none;' id='checkbox_118' >
UP210021/RNS/ASS
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('118', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('118', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=118','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '118');">
24/10/21
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('118', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('118', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=118','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '118');">
Autres sinistres
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('118', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('118', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=118','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '118');">
RNS
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('118', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('118', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=118','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '118');">
Ouvert
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('118', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('118', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=118','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '118');">
PARIS HABITAT
</td>
<td class='tableauCel' style='overflow:hidden; background-color:#DDDDDD; color:#000000;   white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('118', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('118', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=118','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '118');">
Paris
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('118', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('118', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=118','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '118');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('118', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('118', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=118','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '118');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('118', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('118', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=118','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '118');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('118', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('118', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=118','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '118');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('118', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('118', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=118','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '118');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='right'  onClick="javascript:SelectionneLigne('118', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('118', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=118','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '118');">
0.00</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='right'  onClick="javascript:SelectionneLigne('118', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('118', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=118','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '118');">
0.00</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('118', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('118', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=118','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '118');">
Paris Habitat Test
</td>
</tr>
<tr class='valeur' onmouseover="javascript:changerClasseRow(this, 'valeurOn');" onmouseout="javascript:changerClasseRow(this, 'valeur');" id='ligne_116' >
<td class='tableauCel' style=' padding:0px; margin:0px; vertical-align:middle; cursor:pointer;' onClick="javascript:SelectionneLigneOn('116', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=116','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '116');">
<img src='flaticons/ouvrir_fiche.png' style='width:16px;' alt='' border='0' id='loupeOverture116' style='vertical-align:middle;'>
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('116', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('116', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=116','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '116');">
<input type='checkbox' style='display:none;' id='checkbox_116' >
UP210020/LYO/HSI
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('116', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('116', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=116','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '116');">
24/10/21
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('116', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('116', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=116','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '116');">
Hors sinistre
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('116', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('116', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=116','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '116');">
LYO
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('116', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('116', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=116','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '116');">
Ouvert
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('116', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('116', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=116','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '116');">
CABINET YASSIME
</td>
<td class='tableauCel' style='overflow:hidden; background-color:#FFFFFF; color:#000000;   white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('116', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('116', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=116','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '116');">
Mallemort
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('116', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('116', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=116','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '116');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('116', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('116', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=116','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '116');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('116', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('116', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=116','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '116');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('116', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('116', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=116','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '116');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('116', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('116', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=116','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '116');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='right'  onClick="javascript:SelectionneLigne('116', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('116', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=116','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '116');">
0.00</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='right'  onClick="javascript:SelectionneLigne('116', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('116', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=116','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '116');">
0.00</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('116', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('116', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=116','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '116');">

</td>
</tr>
<tr class='valeur' onmouseover="javascript:changerClasseRow(this, 'valeurOn');" onmouseout="javascript:changerClasseRow(this, 'valeur');" id='ligne_115' >
<td class='tableauCel' style=' padding:0px; margin:0px; vertical-align:middle; cursor:pointer;' onClick="javascript:SelectionneLigneOn('115', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=115','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '115');">
<img src='flaticons/ouvrir_fiche.png' style='width:16px;' alt='' border='0' id='loupeOverture115' style='vertical-align:middle;'>
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('115', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('115', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=115','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '115');">
<input type='checkbox' style='display:none;' id='checkbox_115' >
UP210019/IDF/INC
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('115', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('115', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=115','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '115');">
23/10/21
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('115', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('115', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=115','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '115');">
Incendie
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('115', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('115', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=115','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '115');">
IDF
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('115', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('115', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=115','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '115');">
Ouvert
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('115', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('115', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=115','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '115');">
Alex
</td>
<td class='tableauCel' style='overflow:hidden; background-color:#DDDDDD; color:#000000;   white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('115', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('115', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=115','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '115');">
PARIS
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('115', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('115', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=115','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '115');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('115', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('115', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=115','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '115');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('115', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('115', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=115','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '115');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('115', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('115', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=115','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '115');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('115', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('115', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=115','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '115');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='right'  onClick="javascript:SelectionneLigne('115', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('115', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=115','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '115');">
0.00</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='right'  onClick="javascript:SelectionneLigne('115', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('115', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=115','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '115');">
0.00</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('115', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('115', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=115','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '115');">

</td>
</tr>
<tr class='valeur' onmouseover="javascript:changerClasseRow(this, 'valeurOn');" onmouseout="javascript:changerClasseRow(this, 'valeur');" id='ligne_90' >
<td class='tableauCel' style=' padding:0px; margin:0px; vertical-align:middle; cursor:pointer;' onClick="javascript:SelectionneLigneOn('90', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=90','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '90');">
<img src='flaticons/ouvrir_fiche.png' style='width:16px;' alt='' border='0' id='loupeOverture90' style='vertical-align:middle;'>
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('90', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('90', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=90','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '90');">
<input type='checkbox' style='display:none;' id='checkbox_90' >
UP210017/IDF/3DP
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('90', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('90', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=90','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '90');">
02/08/21
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('90', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('90', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=90','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '90');">
Punaises
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('90', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('90', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=90','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '90');">
IDF
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('90', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('90', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=90','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '90');">
Ouvert
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('90', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('90', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=90','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '90');">
PARIS HABITAT
</td>
<td class='tableauCel' style='overflow:hidden; background-color:#FFFFFF; color:#000000;   white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('90', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('90', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=90','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '90');">
Marseille 13e Arrondissement
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('90', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('90', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=90','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '90');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('90', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('90', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=90','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '90');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('90', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('90', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=90','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '90');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('90', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('90', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=90','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '90');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('90', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('90', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=90','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '90');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='right'  onClick="javascript:SelectionneLigne('90', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('90', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=90','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '90');">
0.00</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='right'  onClick="javascript:SelectionneLigne('90', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('90', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=90','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '90');">
0.00</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('90', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('90', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=90','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '90');">

</td>
</tr>
<tr class='valeur' onmouseover="javascript:changerClasseRow(this, 'valeurOn');" onmouseout="javascript:changerClasseRow(this, 'valeur');" id='ligne_83' >
<td class='tableauCel' style=' padding:0px; margin:0px; vertical-align:middle; cursor:pointer;' onClick="javascript:SelectionneLigneOn('83', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=83','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '83');">
<img src='flaticons/ouvrir_fiche.png' style='width:16px;' alt='' border='0' id='loupeOverture83' style='vertical-align:middle;'>
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('83', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('83', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=83','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '83');">
<input type='checkbox' style='display:none;' id='checkbox_83' >
UP210016/IDF/3DP
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('83', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('83', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=83','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '83');">
30/07/21
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('83', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('83', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=83','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '83');">
Punaises
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('83', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('83', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=83','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '83');">
IDF
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('83', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('83', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=83','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '83');">
Ouvert
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('83', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('83', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=83','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '83');">
PARIS HABITAT
</td>
<td class='tableauCel' style='overflow:hidden; background-color:#FFFFFF; color:#000000;   white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('83', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('83', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=83','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '83');">
Paris 20e Arrondissement
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('83', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('83', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=83','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '83');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('83', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('83', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=83','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '83');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('83', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('83', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=83','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '83');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('83', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('83', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=83','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '83');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('83', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('83', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=83','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '83');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='right'  onClick="javascript:SelectionneLigne('83', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('83', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=83','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '83');">
0.00</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='right'  onClick="javascript:SelectionneLigne('83', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('83', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=83','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '83');">
0.00</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('83', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('83', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=83','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '83');">

</td>
</tr>
<tr class='valeur' onmouseover="javascript:changerClasseRow(this, 'valeurOn');" onmouseout="javascript:changerClasseRow(this, 'valeur');" id='ligne_81' >
<td class='tableauCel' style=' padding:0px; margin:0px; vertical-align:middle; cursor:pointer;' onClick="javascript:SelectionneLigneOn('81', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=81','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '81');">
<img src='flaticons/ouvrir_fiche.png' style='width:16px;' alt='' border='0' id='loupeOverture81' style='vertical-align:middle;'>
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('81', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('81', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=81','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '81');">
<input type='checkbox' style='display:none;' id='checkbox_81' >
UP210015/IDF/3DP
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('81', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('81', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=81','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '81');">
30/07/21
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('81', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('81', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=81','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '81');">
Punaises
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('81', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('81', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=81','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '81');">
IDF
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('81', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('81', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=81','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '81');">
Ouvert
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('81', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('81', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=81','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '81');">
PARIS HABITAT
</td>
<td class='tableauCel' style='overflow:hidden; background-color:#FFFFFF; color:#000000;   white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('81', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('81', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=81','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '81');">
Paris
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('81', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('81', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=81','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '81');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('81', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('81', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=81','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '81');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('81', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('81', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=81','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '81');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('81', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('81', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=81','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '81');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('81', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('81', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=81','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '81');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='right'  onClick="javascript:SelectionneLigne('81', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('81', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=81','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '81');">
0.00</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='right'  onClick="javascript:SelectionneLigne('81', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('81', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=81','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '81');">
0.00</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('81', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('81', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=81','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '81');">
Paris Habitat Test
</td>
</tr>
<tr class='valeur' onmouseover="javascript:changerClasseRow(this, 'valeurOn');" onmouseout="javascript:changerClasseRow(this, 'valeur');" id='ligne_80' >
<td class='tableauCel' style=' padding:0px; margin:0px; vertical-align:middle; cursor:pointer;' onClick="javascript:SelectionneLigneOn('80', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=80','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '80');">
<img src='flaticons/ouvrir_fiche.png' style='width:16px;' alt='' border='0' id='loupeOverture80' style='vertical-align:middle;'>
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('80', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('80', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=80','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '80');">
<input type='checkbox' style='display:none;' id='checkbox_80' >
UP210014/IDF/DDE
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('80', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('80', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=80','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '80');">
19/07/21
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('80', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('80', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=80','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '80');">
Dégât des eaux
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('80', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('80', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=80','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '80');">
IDF
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('80', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('80', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=80','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '80');">
Ouvert
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('80', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('80', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=80','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '80');">
tartampion
</td>
<td class='tableauCel' style='overflow:hidden; background-color:#FFFFFF; color:#000000;   white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('80', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('80', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=80','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '80');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('80', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('80', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=80','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '80');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('80', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('80', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=80','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '80');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('80', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('80', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=80','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '80');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('80', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('80', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=80','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '80');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('80', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('80', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=80','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '80');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='right'  onClick="javascript:SelectionneLigne('80', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('80', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=80','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '80');">
0.00</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='right'  onClick="javascript:SelectionneLigne('80', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('80', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=80','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '80');">
0.00</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('80', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('80', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=80','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '80');">

</td>
</tr>
<tr class='valeur' onmouseover="javascript:changerClasseRow(this, 'valeurOn');" onmouseout="javascript:changerClasseRow(this, 'valeur');" id='ligne_79' >
<td class='tableauCel' style=' padding:0px; margin:0px; vertical-align:middle; cursor:pointer;' onClick="javascript:SelectionneLigneOn('79', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=79','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '79');">
<img src='flaticons/ouvrir_fiche.png' style='width:16px;' alt='' border='0' id='loupeOverture79' style='vertical-align:middle;'>
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('79', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('79', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=79','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '79');">
<input type='checkbox' style='display:none;' id='checkbox_79' >
UP210013/IDF/3DP
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('79', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('79', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=79','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '79');">
16/07/21
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('79', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('79', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=79','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '79');">
Punaises
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('79', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('79', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=79','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '79');">
IDF
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('79', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('79', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=79','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '79');">
Ouvert
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('79', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('79', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=79','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '79');">
PARIS HABITAT
</td>
<td class='tableauCel' style='overflow:hidden; background-color:#DDDDDD; color:#000000;   white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('79', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('79', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=79','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '79');">
Paris
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('79', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('79', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=79','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '79');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('79', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('79', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=79','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '79');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('79', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('79', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=79','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '79');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('79', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('79', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=79','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '79');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('79', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('79', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=79','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '79');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='right'  onClick="javascript:SelectionneLigne('79', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('79', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=79','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '79');">
0.00</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='right'  onClick="javascript:SelectionneLigne('79', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('79', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=79','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '79');">
0.00</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('79', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('79', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=79','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '79');">
Paris Habitat Test
</td>
</tr>
<tr class='valeur' onmouseover="javascript:changerClasseRow(this, 'valeurOn');" onmouseout="javascript:changerClasseRow(this, 'valeur');" id='ligne_77' >
<td class='tableauCel' style=' padding:0px; margin:0px; vertical-align:middle; cursor:pointer;' onClick="javascript:SelectionneLigneOn('77', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=77','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '77');">
<img src='flaticons/ouvrir_fiche.png' style='width:16px;' alt='' border='0' id='loupeOverture77' style='vertical-align:middle;'>
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('77', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('77', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=77','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '77');">
<input type='checkbox' style='display:none;' id='checkbox_77' >
UP210012/RNS/DDE
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('77', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('77', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=77','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '77');">
07/07/21
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('77', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('77', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=77','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '77');">
Dégât des eaux
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('77', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('77', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=77','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '77');">
RNS
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('77', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('77', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=77','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '77');">
Ouvert
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('77', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('77', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=77','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '77');">
Marteau Christine
</td>
<td class='tableauCel' style='overflow:hidden; background-color:#FFFFFF; color:#000000;   white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('77', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('77', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=77','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '77');">
Jard sur Mer
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('77', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('77', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=77','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '77');">
MAIF Service Sinistre 
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('77', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('77', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=77','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '77');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('77', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('77', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=77','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '77');">
Civel Arnaud
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('77', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('77', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=77','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '77');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('77', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('77', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=77','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '77');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='right'  onClick="javascript:SelectionneLigne('77', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('77', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=77','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '77');">
0.00</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='right'  onClick="javascript:SelectionneLigne('77', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('77', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=77','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '77');">
0.00</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('77', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('77', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=77','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '77');">

</td>
</tr>
<tr class='valeur' onmouseover="javascript:changerClasseRow(this, 'valeurOn');" onmouseout="javascript:changerClasseRow(this, 'valeur');" id='ligne_75' >
<td class='tableauCel' style=' padding:0px; margin:0px; vertical-align:middle; cursor:pointer;' onClick="javascript:SelectionneLigneOn('75', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=75','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '75');">
<img src='flaticons/ouvrir_fiche.png' style='width:16px;' alt='' border='0' id='loupeOverture75' style='vertical-align:middle;'>
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('75', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('75', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=75','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '75');">
<input type='checkbox' style='display:none;' id='checkbox_75' >
UP210011/RNS/DDE
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('75', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('75', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=75','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '75');">
01/07/21
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('75', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('75', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=75','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '75');">
Dégât des eaux
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('75', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('75', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=75','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '75');">
RNS
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('75', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('75', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=75','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '75');">
Ouvert
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('75', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('75', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=75','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '75');">
Annick Mainguet
</td>
<td class='tableauCel' style='overflow:hidden; background-color:#DDDDDD; color:#000000;   white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('75', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('75', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=75','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '75');">
Rennes
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('75', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('75', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=75','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '75');">
MAIF Service Sinistre 
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('75', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('75', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=75','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '75');">
11/03/21
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('75', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('75', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=75','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '75');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('75', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('75', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=75','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '75');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('75', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('75', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=75','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '75');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='right'  onClick="javascript:SelectionneLigne('75', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('75', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=75','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '75');">
0.00</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='right'  onClick="javascript:SelectionneLigne('75', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('75', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=75','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '75');">
0.00</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('75', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('75', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=75','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '75');">

</td>
</tr>
<tr class='valeur' onmouseover="javascript:changerClasseRow(this, 'valeurOn');" onmouseout="javascript:changerClasseRow(this, 'valeur');" id='ligne_59' >
<td class='tableauCel' style=' padding:0px; margin:0px; vertical-align:middle; cursor:pointer;' onClick="javascript:SelectionneLigneOn('59', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=59','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '59');">
<img src='flaticons/ouvrir_fiche.png' style='width:16px;' alt='' border='0' id='loupeOverture59' style='vertical-align:middle;'>
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('59', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('59', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=59','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '59');">
<input type='checkbox' style='display:none;' id='checkbox_59' >
UP210010/IDF/3DP
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('59', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('59', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=59','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '59');">
24/06/21
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('59', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('59', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=59','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '59');">
Punaises
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('59', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('59', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=59','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '59');">
IDF
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('59', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('59', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=59','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '59');">
Ouvert
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('59', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('59', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=59','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '59');">
Client Test SCA
</td>
<td class='tableauCel' style='overflow:hidden; background-color:#DDDDDD; color:#000000;   white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('59', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('59', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=59','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '59');">
PARIS
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('59', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('59', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=59','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '59');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('59', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('59', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=59','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '59');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('59', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('59', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=59','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '59');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('59', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('59', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=59','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '59');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('59', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('59', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=59','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '59');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='right'  onClick="javascript:SelectionneLigne('59', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('59', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=59','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '59');">
0.00</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='right'  onClick="javascript:SelectionneLigne('59', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('59', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=59','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '59');">
0.00</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('59', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('59', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=59','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '59');">

</td>
</tr>
<tr class='valeur' onmouseover="javascript:changerClasseRow(this, 'valeurOn');" onmouseout="javascript:changerClasseRow(this, 'valeur');" id='ligne_54' >
<td class='tableauCel' style=' padding:0px; margin:0px; vertical-align:middle; cursor:pointer;' onClick="javascript:SelectionneLigneOn('54', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=54','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '54');">
<img src='flaticons/ouvrir_fiche.png' style='width:16px;' alt='' border='0' id='loupeOverture54' style='vertical-align:middle;'>
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('54', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('54', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=54','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '54');">
<input type='checkbox' style='display:none;' id='checkbox_54' >
UP210009/IDF/DDE
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('54', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('54', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=54','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '54');">
21/06/21
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('54', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('54', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=54','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '54');">
Dégât des eaux
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('54', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('54', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=54','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '54');">
IDF
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('54', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('54', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=54','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '54');">
Ouvert
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('54', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('54', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=54','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '54');">
Yassime Dilmi
</td>
<td class='tableauCel' style='overflow:hidden; background-color:#DDDDDD; color:#000000;   white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('54', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('54', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=54','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '54');">
Paris
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('54', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('54', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=54','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '54');">
mutelle de yassime
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('54', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('54', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=54','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '54');">
19/06/21
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('54', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('54', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=54','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '54');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('54', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('54', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=54','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '54');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('54', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('54', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=54','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '54');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='right'  onClick="javascript:SelectionneLigne('54', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('54', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=54','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '54');">
0.00</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='right'  onClick="javascript:SelectionneLigne('54', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('54', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=54','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '54');">
0.00</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('54', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('54', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=54','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '54');">

</td>
</tr>
<tr class='valeur' onmouseover="javascript:changerClasseRow(this, 'valeurOn');" onmouseout="javascript:changerClasseRow(this, 'valeur');" id='ligne_53' >
<td class='tableauCel' style=' padding:0px; margin:0px; vertical-align:middle; cursor:pointer;' onClick="javascript:SelectionneLigneOn('53', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=53','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '53');">
<img src='flaticons/ouvrir_fiche.png' style='width:16px;' alt='' border='0' id='loupeOverture53' style='vertical-align:middle;'>
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('53', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('53', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=53','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '53');">
<input type='checkbox' style='display:none;' id='checkbox_53' >
UP210008/RNS/DDE
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('53', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('53', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=53','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '53');">
21/06/21
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('53', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('53', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=53','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '53');">
Dégât des eaux
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('53', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('53', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=53','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '53');">
RNS
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('53', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('53', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=53','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '53');">
Ouvert
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('53', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('53', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=53','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '53');">
Thomas Michel
</td>
<td class='tableauCel' style='overflow:hidden; background-color:#FFFFFF; color:#000000;   white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('53', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('53', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=53','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '53');">
Laignelet
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('53', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('53', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=53','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '53');">
MAIF Service Sinistre 
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('53', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('53', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=53','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '53');">
19/06/21
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('53', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('53', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=53','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '53');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('53', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('53', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=53','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '53');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('53', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('53', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=53','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '53');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='right'  onClick="javascript:SelectionneLigne('53', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('53', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=53','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '53');">
1 215.33</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='right'  onClick="javascript:SelectionneLigne('53', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('53', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=53','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '53');">
1 166.72</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('53', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('53', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=53','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '53');">

</td>
</tr>
<tr class='valeur' onmouseover="javascript:changerClasseRow(this, 'valeurOn');" onmouseout="javascript:changerClasseRow(this, 'valeur');" id='ligne_35' >
<td class='tableauCel' style=' padding:0px; margin:0px; vertical-align:middle; cursor:pointer;' onClick="javascript:SelectionneLigneOn('35', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=35','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '35');">
<img src='flaticons/ouvrir_fiche.png' style='width:16px;' alt='' border='0' id='loupeOverture35' style='vertical-align:middle;'>
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('35', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('35', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=35','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '35');">
<input type='checkbox' style='display:none;' id='checkbox_35' >
UP210007/IDF/INC
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('35', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('35', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=35','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '35');">
02/06/21
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('35', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('35', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=35','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '35');">
Incendie
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('35', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('35', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=35','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '35');">
IDF
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('35', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('35', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=35','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '35');">
Ouvert
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('35', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('35', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=35','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '35');">
Client Test SCA 2
</td>
<td class='tableauCel' style='overflow:hidden; background-color:#FFFFFF; color:#000000;   white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('35', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('35', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=35','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '35');">
PARIS
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('35', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('35', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=35','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '35');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('35', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('35', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=35','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '35');">
01/06/21
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('35', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('35', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=35','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '35');">
SAVY
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('35', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('35', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=35','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '35');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('35', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('35', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=35','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '35');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='right'  onClick="javascript:SelectionneLigne('35', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('35', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=35','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '35');">
0.00</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='right'  onClick="javascript:SelectionneLigne('35', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('35', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=35','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '35');">
0.00</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('35', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('35', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=35','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '35');">

</td>
</tr>
<tr class='valeur' onmouseover="javascript:changerClasseRow(this, 'valeurOn');" onmouseout="javascript:changerClasseRow(this, 'valeur');" id='ligne_31' >
<td class='tableauCel' style=' padding:0px; margin:0px; vertical-align:middle; cursor:pointer;' onClick="javascript:SelectionneLigneOn('31', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=31','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '31');">
<img src='flaticons/ouvrir_fiche.png' style='width:16px;' alt='' border='0' id='loupeOverture31' style='vertical-align:middle;'>
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('31', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('31', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=31','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '31');">
<input type='checkbox' style='display:none;' id='checkbox_31' >
UP210006/IDF/DDE
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('31', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('31', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=31','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '31');">
02/06/21
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('31', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('31', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=31','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '31');">
Dégât des eaux
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('31', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('31', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=31','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '31');">
IDF
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('31', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('31', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=31','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '31');">
Ouvert
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('31', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('31', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=31','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '31');">
PARIS HABITAT
</td>
<td class='tableauCel' style='overflow:hidden; background-color:#FFFFFF; color:#000000;   white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('31', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('31', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=31','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '31');">
osny
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('31', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('31', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=31','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '31');">
mutelle de yassime
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('31', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('31', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=31','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '31');">
02/06/21
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('31', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('31', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=31','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '31');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('31', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('31', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=31','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '31');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('31', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('31', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=31','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '31');">
paris habitatr
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='right'  onClick="javascript:SelectionneLigne('31', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('31', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=31','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '31');">
0.00</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='right'  onClick="javascript:SelectionneLigne('31', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('31', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=31','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '31');">
0.00</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('31', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('31', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=31','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '31');">

</td>
</tr>
<tr class='valeur' onmouseover="javascript:changerClasseRow(this, 'valeurOn');" onmouseout="javascript:changerClasseRow(this, 'valeur');" id='ligne_29' >
<td class='tableauCel' style=' padding:0px; margin:0px; vertical-align:middle; cursor:pointer;' onClick="javascript:SelectionneLigneOn('29', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=29','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '29');">
<img src='flaticons/ouvrir_fiche.png' style='width:16px;' alt='' border='0' id='loupeOverture29' style='vertical-align:middle;'>
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('29', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('29', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=29','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '29');">
<input type='checkbox' style='display:none;' id='checkbox_29' >
UP210005/IDF/3DP
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('29', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('29', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=29','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '29');">
12/05/21
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('29', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('29', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=29','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '29');">
Punaises
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('29', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('29', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=29','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '29');">
IDF
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('29', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('29', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=29','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '29');">
Ouvert
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('29', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('29', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=29','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '29');">
PARIS HABITAT
</td>
<td class='tableauCel' style='overflow:hidden; background-color:#DDDDDD; color:#000000;   white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('29', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('29', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=29','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '29');">
Paris
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('29', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('29', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=29','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '29');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('29', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('29', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=29','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '29');">
12/05/21
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('29', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('29', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=29','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '29');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('29', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('29', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=29','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '29');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('29', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('29', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=29','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '29');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='right'  onClick="javascript:SelectionneLigne('29', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('29', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=29','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '29');">
144.50</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='right'  onClick="javascript:SelectionneLigne('29', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('29', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=29','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '29');">
0.00</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('29', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('29', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=29','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '29');">

</td>
</tr>
<tr class='valeur' onmouseover="javascript:changerClasseRow(this, 'valeurOn');" onmouseout="javascript:changerClasseRow(this, 'valeur');" id='ligne_26' >
<td class='tableauCel' style=' padding:0px; margin:0px; vertical-align:middle; cursor:pointer;' onClick="javascript:SelectionneLigneOn('26', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=26','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '26');">
<img src='flaticons/ouvrir_fiche.png' style='width:16px;' alt='' border='0' id='loupeOverture26' style='vertical-align:middle;'>
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('26', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('26', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=26','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '26');">
<input type='checkbox' style='display:none;' id='checkbox_26' >
UP210004/MRS/DDE
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('26', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('26', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=26','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '26');">
11/05/21
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('26', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('26', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=26','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '26');">
Dégât des eaux
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('26', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('26', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=26','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '26');">
MRS
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('26', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('26', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=26','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '26');">
Ouvert
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('26', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('26', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=26','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '26');">
SAIDA A
</td>
<td class='tableauCel' style='overflow:hidden; background-color:#FFFFFF; color:#000000;   white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('26', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('26', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=26','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '26');">
ROUEN
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('26', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('26', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=26','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '26');">
TEST Creation Assurance
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('26', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('26', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=26','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '26');">
01/06/21
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('26', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('26', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=26','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '26');">
TEST Creation Expert1
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('26', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('26', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=26','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '26');">
TEST Creation Expert2
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('26', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('26', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=26','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '26');">
Test création plateforme
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='right'  onClick="javascript:SelectionneLigne('26', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('26', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=26','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '26');">
5 035.91</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='right'  onClick="javascript:SelectionneLigne('26', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('26', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=26','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '26');">
2 535.91</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('26', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('26', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=26','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '26');">

</td>
</tr>
<tr class='valeur' onmouseover="javascript:changerClasseRow(this, 'valeurOn');" onmouseout="javascript:changerClasseRow(this, 'valeur');" id='ligne_23' >
<td class='tableauCel' style=' padding:0px; margin:0px; vertical-align:middle; cursor:pointer;' onClick="javascript:SelectionneLigneOn('23', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=23','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '23');">
<img src='flaticons/ouvrir_fiche.png' style='width:16px;' alt='' border='0' id='loupeOverture23' style='vertical-align:middle;'>
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('23', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('23', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=23','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '23');">
<input type='checkbox' style='display:none;' id='checkbox_23' >
UP210003/LYO/DDE
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('23', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('23', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=23','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '23');">
11/05/21
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('23', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('23', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=23','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '23');">
Dégât des eaux
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('23', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('23', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=23','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '23');">
LYO
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('23', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('23', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=23','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '23');">
Ouvert
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('23', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('23', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=23','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '23');">
TEST TEST
</td>
<td class='tableauCel' style='overflow:hidden; background-color:#DDDDDD; color:#000000;   white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('23', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('23', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=23','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '23');">
Toulouse
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('23', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('23', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=23','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '23');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('23', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('23', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=23','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '23');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('23', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('23', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=23','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '23');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('23', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('23', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=23','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '23');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('23', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('23', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=23','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '23');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='right'  onClick="javascript:SelectionneLigne('23', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('23', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=23','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '23');">
0.00</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='right'  onClick="javascript:SelectionneLigne('23', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('23', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=23','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '23');">
0.00</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('23', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('23', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=23','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '23');">

</td>
</tr>
<tr class='valeur' onmouseover="javascript:changerClasseRow(this, 'valeurOn');" onmouseout="javascript:changerClasseRow(this, 'valeur');" id='ligne_20' >
<td class='tableauCel' style=' padding:0px; margin:0px; vertical-align:middle; cursor:pointer;' onClick="javascript:SelectionneLigneOn('20', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=20','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '20');">
<img src='flaticons/ouvrir_fiche.png' style='width:16px;' alt='' border='0' id='loupeOverture20' style='vertical-align:middle;'>
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('20', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('20', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=20','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '20');">
<input type='checkbox' style='display:none;' id='checkbox_20' >
UP210002/IDF/INC
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('20', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('20', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=20','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '20');">
11/05/21
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('20', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('20', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=20','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '20');">
Incendie
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('20', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('20', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=20','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '20');">
IDF
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('20', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('20', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=20','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '20');">
Classé sans suite
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('20', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('20', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=20','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '20');">
TEST
</td>
<td class='tableauCel' style='overflow:hidden; background-color:#DDDDDD; color:#000000;   white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('20', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('20', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=20','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '20');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('20', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('20', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=20','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '20');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('20', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('20', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=20','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '20');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('20', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('20', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=20','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '20');">
Expert test
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('20', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('20', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=20','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '20');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('20', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('20', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=20','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '20');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='right'  onClick="javascript:SelectionneLigne('20', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('20', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=20','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '20');">
0.00</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='right'  onClick="javascript:SelectionneLigne('20', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('20', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=20','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '20');">
0.00</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('20', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('20', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=20','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '20');">

</td>
</tr>
<tr class='valeur' onmouseover="javascript:changerClasseRow(this, 'valeurOn');" onmouseout="javascript:changerClasseRow(this, 'valeur');" id='ligne_18' >
<td class='tableauCel' style=' padding:0px; margin:0px; vertical-align:middle; cursor:pointer;' onClick="javascript:SelectionneLigneOn('18', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=18','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '18');">
<img src='flaticons/ouvrir_fiche.png' style='width:16px;' alt='' border='0' id='loupeOverture18' style='vertical-align:middle;'>
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('18', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('18', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=18','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '18');">
<input type='checkbox' style='display:none;' id='checkbox_18' >
UP210001/RNS/ASS
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('18', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('18', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=18','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '18');">
06/05/21
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('18', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('18', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=18','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '18');">
Autres sinistres
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('18', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('18', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=18','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '18');">
RNS
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('18', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('18', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=18','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '18');">
Ouvert
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('18', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('18', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=18','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '18');">
TEST CLIENT modif
</td>
<td class='tableauCel' style='overflow:hidden; background-color:#DDDDDD; color:#000000;   white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('18', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('18', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=18','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '18');">
Toulouse
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('18', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('18', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=18','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '18');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('18', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('18', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=18','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '18');">
12/07/21
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('18', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('18', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=18','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '18');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('18', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('18', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=18','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '18');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('18', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('18', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=18','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '18');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='right'  onClick="javascript:SelectionneLigne('18', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('18', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=18','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '18');">
0.00</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='right'  onClick="javascript:SelectionneLigne('18', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('18', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=18','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '18');">
0.00</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('18', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('18', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=18','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '18');">

</td>
</tr>
<tr class='valeur' onmouseover="javascript:changerClasseRow(this, 'valeurOn');" onmouseout="javascript:changerClasseRow(this, 'valeur');" id='ligne_8' >
<td class='tableauCel' style=' padding:0px; margin:0px; vertical-align:middle; cursor:pointer;' onClick="javascript:SelectionneLigneOn('8', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=8','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '8');">
<img src='flaticons/ouvrir_fiche.png' style='width:16px;' alt='' border='0' id='loupeOverture8' style='vertical-align:middle;'>
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('8', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('8', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=8','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '8');">
<input type='checkbox' style='display:none;' id='checkbox_8' >
UP/LUX/DDE
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('8', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('8', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=8','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '8');">
06/04/21
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('8', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('8', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=8','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '8');">
Dégât des eaux
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('8', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('8', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=8','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '8');">
LUX
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('8', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('8', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=8','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '8');">
Ouvert
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('8', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('8', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=8','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '8');">
TEST CLIENT modif
</td>
<td class='tableauCel' style='overflow:hidden; background-color:#DDDDDD; color:#000000;   white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('8', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('8', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=8','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '8');">
Toulouse
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('8', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('8', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=8','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '8');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('8', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('8', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=8','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '8');">
06/04/21
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('8', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('8', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=8','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '8');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('8', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('8', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=8','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '8');">
Test création Expert Assuré
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('8', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('8', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=8','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '8');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='right'  onClick="javascript:SelectionneLigne('8', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('8', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=8','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '8');">
0.00</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='right'  onClick="javascript:SelectionneLigne('8', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('8', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=8','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '8');">
0.00</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('8', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('8', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=8','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '8');">

</td>
</tr>
<tr class='valeur' onmouseover="javascript:changerClasseRow(this, 'valeurOn');" onmouseout="javascript:changerClasseRow(this, 'valeur');" id='ligne_11' >
<td class='tableauCel' style=' padding:0px; margin:0px; vertical-align:middle; cursor:pointer;' onClick="javascript:SelectionneLigneOn('11', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=11','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '11');">
<img src='flaticons/ouvrir_fiche.png' style='width:16px;' alt='' border='0' id='loupeOverture11' style='vertical-align:middle;'>
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('11', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('11', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=11','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '11');">
<input type='checkbox' style='display:none;' id='checkbox_11' >
UP/IDF/3DP
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('11', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('11', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=11','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '11');">
03/05/21
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('11', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('11', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=11','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '11');">
Punaises
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('11', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('11', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=11','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '11');">
IDF
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('11', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('11', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=11','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '11');">
Ouvert
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('11', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('11', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=11','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '11');">
PARIS HABITAT
</td>
<td class='tableauCel' style='overflow:hidden; background-color:#DDDDDD; color:#000000;   white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('11', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('11', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=11','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '11');">
Paris
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('11', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('11', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=11','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '11');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('11', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('11', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=11','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '11');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('11', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('11', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=11','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '11');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('11', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('11', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=11','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '11');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('11', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('11', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=11','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '11');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='right'  onClick="javascript:SelectionneLigne('11', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('11', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=11','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '11');">
0.00</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='right'  onClick="javascript:SelectionneLigne('11', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('11', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=11','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '11');">
0.00</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('11', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('11', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=11','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '11');">

</td>
</tr>
<tr class='valeur' onmouseover="javascript:changerClasseRow(this, 'valeurOn');" onmouseout="javascript:changerClasseRow(this, 'valeur');" id='ligne_13' >
<td class='tableauCel' style=' padding:0px; margin:0px; vertical-align:middle; cursor:pointer;' onClick="javascript:SelectionneLigneOn('13', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=13','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '13');">
<img src='flaticons/ouvrir_fiche.png' style='width:16px;' alt='' border='0' id='loupeOverture13' style='vertical-align:middle;'>
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('13', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('13', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=13','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '13');">
<input type='checkbox' style='display:none;' id='checkbox_13' >
UP/IDF/3DP
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('13', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('13', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=13','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '13');">
03/05/21
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('13', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('13', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=13','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '13');">
Punaises
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('13', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('13', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=13','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '13');">
IDF
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('13', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('13', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=13','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '13');">
Ouvert
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('13', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('13', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=13','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '13');">
PARIS HABITAT
</td>
<td class='tableauCel' style='overflow:hidden; background-color:#DDDDDD; color:#000000;   white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('13', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('13', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=13','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '13');">
Paris
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('13', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('13', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=13','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '13');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('13', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('13', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=13','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '13');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('13', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('13', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=13','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '13');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('13', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('13', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=13','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '13');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('13', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('13', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=13','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '13');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='right'  onClick="javascript:SelectionneLigne('13', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('13', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=13','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '13');">
0.00</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='right'  onClick="javascript:SelectionneLigne('13', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('13', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=13','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '13');">
0.00</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('13', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('13', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=13','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '13');">

</td>
</tr>
<tr class='valeur' onmouseover="javascript:changerClasseRow(this, 'valeurOn');" onmouseout="javascript:changerClasseRow(this, 'valeur');" id='ligne_3' >
<td class='tableauCel' style=' padding:0px; margin:0px; vertical-align:middle; cursor:pointer;' onClick="javascript:SelectionneLigneOn('3', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=3','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '3');">
<img src='flaticons/ouvrir_fiche.png' style='width:16px;' alt='' border='0' id='loupeOverture3' style='vertical-align:middle;'>
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('3', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('3', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=3','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '3');">
<input type='checkbox' style='display:none;' id='checkbox_3' >
UP//
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('3', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('3', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=3','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '3');">
22/03/21
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('3', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('3', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=3','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '3');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('3', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('3', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=3','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '3');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('3', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('3', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=3','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '3');">
Ouvert
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('3', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('3', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=3','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '3');">

</td>
<td class='tableauCel' style='overflow:hidden; background-color:#DDDDDD; color:#000000;   white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('3', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('3', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=3','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '3');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('3', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('3', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=3','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '3');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('3', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('3', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=3','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '3');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('3', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('3', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=3','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '3');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('3', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('3', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=3','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '3');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('3', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('3', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=3','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '3');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='right'  onClick="javascript:SelectionneLigne('3', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('3', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=3','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '3');">
0.00</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='right'  onClick="javascript:SelectionneLigne('3', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('3', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=3','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '3');">
0.00</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('3', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('3', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=3','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '3');">

</td>
</tr>
<tr class='valeur' onmouseover="javascript:changerClasseRow(this, 'valeurOn');" onmouseout="javascript:changerClasseRow(this, 'valeur');" id='ligne_4' >
<td class='tableauCel' style=' padding:0px; margin:0px; vertical-align:middle; cursor:pointer;' onClick="javascript:SelectionneLigneOn('4', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=4','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '4');">
<img src='flaticons/ouvrir_fiche.png' style='width:16px;' alt='' border='0' id='loupeOverture4' style='vertical-align:middle;'>
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('4', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('4', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=4','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '4');">
<input type='checkbox' style='display:none;' id='checkbox_4' >
UP//
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('4', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('4', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=4','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '4');">
22/03/21
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('4', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('4', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=4','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '4');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('4', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('4', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=4','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '4');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('4', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('4', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=4','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '4');">
Ouvert
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('4', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('4', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=4','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '4');">

</td>
<td class='tableauCel' style='overflow:hidden; background-color:#DDDDDD; color:#000000;   white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('4', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('4', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=4','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '4');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('4', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('4', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=4','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '4');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('4', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('4', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=4','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '4');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('4', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('4', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=4','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '4');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('4', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('4', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=4','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '4');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('4', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('4', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=4','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '4');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='right'  onClick="javascript:SelectionneLigne('4', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('4', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=4','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '4');">
0.00</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='right'  onClick="javascript:SelectionneLigne('4', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('4', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=4','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '4');">
0.00</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('4', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('4', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=4','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '4');">

</td>
</tr>
<tr class='valeur' onmouseover="javascript:changerClasseRow(this, 'valeurOn');" onmouseout="javascript:changerClasseRow(this, 'valeur');" id='ligne_30' >
<td class='tableauCel' style=' padding:0px; margin:0px; vertical-align:middle; cursor:pointer;' onClick="javascript:SelectionneLigneOn('30', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=30','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '30');">
<img src='flaticons/ouvrir_fiche.png' style='width:16px;' alt='' border='0' id='loupeOverture30' style='vertical-align:middle;'>
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('30', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('30', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=30','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '30');">
<input type='checkbox' style='display:none;' id='checkbox_30' >

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('30', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('30', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=30','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '30');">
02/06/21
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('30', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('30', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=30','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '30');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('30', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('30', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=30','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '30');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('30', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('30', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=30','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '30');">
Ouvert
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('30', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('30', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=30','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '30');">

</td>
<td class='tableauCel' style='overflow:hidden; background-color:#DDDDDD; color:#000000;   white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('30', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('30', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=30','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '30');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('30', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('30', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=30','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '30');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('30', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('30', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=30','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '30');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('30', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('30', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=30','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '30');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('30', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('30', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=30','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '30');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('30', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('30', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=30','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '30');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='right'  onClick="javascript:SelectionneLigne('30', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('30', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=30','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '30');">
0.00</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='right'  onClick="javascript:SelectionneLigne('30', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('30', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=30','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '30');">
0.00</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('30', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('30', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=30','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '30');">

</td>
</tr>
<tr class='valeur' onmouseover="javascript:changerClasseRow(this, 'valeurOn');" onmouseout="javascript:changerClasseRow(this, 'valeur');" id='ligne_33' >
<td class='tableauCel' style=' padding:0px; margin:0px; vertical-align:middle; cursor:pointer;' onClick="javascript:SelectionneLigneOn('33', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=33','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '33');">
<img src='flaticons/ouvrir_fiche.png' style='width:16px;' alt='' border='0' id='loupeOverture33' style='vertical-align:middle;'>
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('33', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('33', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=33','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '33');">
<input type='checkbox' style='display:none;' id='checkbox_33' >

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('33', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('33', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=33','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '33');">
02/06/21
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('33', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('33', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=33','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '33');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('33', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('33', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=33','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '33');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('33', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('33', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=33','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '33');">
Ouvert
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('33', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('33', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=33','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '33');">

</td>
<td class='tableauCel' style='overflow:hidden; background-color:#DDDDDD; color:#000000;   white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('33', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('33', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=33','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '33');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('33', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('33', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=33','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '33');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('33', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('33', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=33','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '33');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('33', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('33', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=33','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '33');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('33', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('33', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=33','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '33');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('33', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('33', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=33','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '33');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='right'  onClick="javascript:SelectionneLigne('33', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('33', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=33','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '33');">
0.00</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='right'  onClick="javascript:SelectionneLigne('33', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('33', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=33','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '33');">
0.00</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('33', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('33', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=33','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '33');">

</td>
</tr>
<tr class='valeur' onmouseover="javascript:changerClasseRow(this, 'valeurOn');" onmouseout="javascript:changerClasseRow(this, 'valeur');" id='ligne_34' >
<td class='tableauCel' style=' padding:0px; margin:0px; vertical-align:middle; cursor:pointer;' onClick="javascript:SelectionneLigneOn('34', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=34','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '34');">
<img src='flaticons/ouvrir_fiche.png' style='width:16px;' alt='' border='0' id='loupeOverture34' style='vertical-align:middle;'>
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('34', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('34', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=34','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '34');">
<input type='checkbox' style='display:none;' id='checkbox_34' >

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('34', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('34', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=34','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '34');">
02/06/21
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('34', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('34', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=34','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '34');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('34', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('34', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=34','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '34');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('34', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('34', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=34','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '34');">
Ouvert
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('34', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('34', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=34','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '34');">

</td>
<td class='tableauCel' style='overflow:hidden; background-color:#DDDDDD; color:#000000;   white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('34', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('34', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=34','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '34');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('34', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('34', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=34','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '34');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('34', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('34', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=34','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '34');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('34', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('34', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=34','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '34');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('34', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('34', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=34','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '34');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('34', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('34', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=34','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '34');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='right'  onClick="javascript:SelectionneLigne('34', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('34', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=34','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '34');">
0.00</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='right'  onClick="javascript:SelectionneLigne('34', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('34', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=34','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '34');">
0.00</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('34', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('34', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=34','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '34');">

</td>
</tr>
<tr class='valeur' onmouseover="javascript:changerClasseRow(this, 'valeurOn');" onmouseout="javascript:changerClasseRow(this, 'valeur');" id='ligne_92' >
<td class='tableauCel' style=' padding:0px; margin:0px; vertical-align:middle; cursor:pointer;' onClick="javascript:SelectionneLigneOn('92', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=92','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '92');">
<img src='flaticons/ouvrir_fiche.png' style='width:16px;' alt='' border='0' id='loupeOverture92' style='vertical-align:middle;'>
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('92', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('92', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=92','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '92');">
<input type='checkbox' style='display:none;' id='checkbox_92' >

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('92', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('92', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=92','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '92');">
01/10/21
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('92', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('92', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=92','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '92');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('92', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('92', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=92','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '92');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('92', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('92', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=92','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '92');">
Ouvert
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('92', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('92', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=92','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '92');">

</td>
<td class='tableauCel' style='overflow:hidden; background-color:#FFFFFF; color:#000000;   white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('92', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('92', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=92','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '92');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('92', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('92', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=92','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '92');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('92', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('92', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=92','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '92');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('92', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('92', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=92','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '92');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('92', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('92', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=92','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '92');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('92', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('92', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=92','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '92');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='right'  onClick="javascript:SelectionneLigne('92', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('92', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=92','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '92');">
0.00</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='right'  onClick="javascript:SelectionneLigne('92', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('92', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=92','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '92');">
0.00</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('92', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('92', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=92','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '92');">

</td>
</tr>
<tr class='valeur' onmouseover="javascript:changerClasseRow(this, 'valeurOn');" onmouseout="javascript:changerClasseRow(this, 'valeur');" id='ligne_93' >
<td class='tableauCel' style=' padding:0px; margin:0px; vertical-align:middle; cursor:pointer;' onClick="javascript:SelectionneLigneOn('93', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=93','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '93');">
<img src='flaticons/ouvrir_fiche.png' style='width:16px;' alt='' border='0' id='loupeOverture93' style='vertical-align:middle;'>
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('93', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('93', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=93','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '93');">
<input type='checkbox' style='display:none;' id='checkbox_93' >

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('93', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('93', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=93','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '93');">
01/10/21
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('93', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('93', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=93','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '93');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('93', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('93', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=93','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '93');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('93', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('93', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=93','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '93');">
Ouvert
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('93', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('93', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=93','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '93');">

</td>
<td class='tableauCel' style='overflow:hidden; background-color:#FFFFFF; color:#000000;   white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('93', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('93', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=93','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '93');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('93', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('93', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=93','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '93');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('93', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('93', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=93','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '93');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('93', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('93', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=93','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '93');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('93', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('93', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=93','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '93');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('93', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('93', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=93','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '93');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='right'  onClick="javascript:SelectionneLigne('93', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('93', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=93','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '93');">
0.00</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='right'  onClick="javascript:SelectionneLigne('93', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('93', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=93','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '93');">
0.00</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('93', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('93', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=93','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '93');">

</td>
</tr>
<tr class='valeur' onmouseover="javascript:changerClasseRow(this, 'valeurOn');" onmouseout="javascript:changerClasseRow(this, 'valeur');" id='ligne_97' >
<td class='tableauCel' style=' padding:0px; margin:0px; vertical-align:middle; cursor:pointer;' onClick="javascript:SelectionneLigneOn('97', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=97','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '97');">
<img src='flaticons/ouvrir_fiche.png' style='width:16px;' alt='' border='0' id='loupeOverture97' style='vertical-align:middle;'>
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('97', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('97', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=97','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '97');">
<input type='checkbox' style='display:none;' id='checkbox_97' >

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('97', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('97', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=97','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '97');">
03/10/21
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('97', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('97', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=97','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '97');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('97', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('97', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=97','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '97');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('97', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('97', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=97','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '97');">
Ouvert
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('97', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('97', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=97','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '97');">

</td>
<td class='tableauCel' style='overflow:hidden; background-color:#FFFFFF; color:#000000;   white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('97', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('97', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=97','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '97');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('97', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('97', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=97','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '97');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('97', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('97', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=97','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '97');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('97', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('97', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=97','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '97');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('97', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('97', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=97','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '97');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('97', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('97', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=97','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '97');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='right'  onClick="javascript:SelectionneLigne('97', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('97', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=97','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '97');">
0.00</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='right'  onClick="javascript:SelectionneLigne('97', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('97', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=97','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '97');">
0.00</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('97', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('97', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=97','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '97');">

</td>
</tr>
<tr class='valeur' onmouseover="javascript:changerClasseRow(this, 'valeurOn');" onmouseout="javascript:changerClasseRow(this, 'valeur');" id='ligne_98' >
<td class='tableauCel' style=' padding:0px; margin:0px; vertical-align:middle; cursor:pointer;' onClick="javascript:SelectionneLigneOn('98', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=98','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '98');">
<img src='flaticons/ouvrir_fiche.png' style='width:16px;' alt='' border='0' id='loupeOverture98' style='vertical-align:middle;'>
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('98', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('98', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=98','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '98');">
<input type='checkbox' style='display:none;' id='checkbox_98' >

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('98', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('98', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=98','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '98');">
03/10/21
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('98', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('98', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=98','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '98');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('98', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('98', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=98','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '98');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('98', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('98', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=98','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '98');">
Ouvert
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('98', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('98', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=98','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '98');">

</td>
<td class='tableauCel' style='overflow:hidden; background-color:#FFFFFF; color:#000000;   white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('98', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('98', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=98','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '98');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('98', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('98', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=98','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '98');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('98', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('98', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=98','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '98');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('98', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('98', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=98','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '98');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('98', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('98', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=98','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '98');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('98', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('98', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=98','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '98');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='right'  onClick="javascript:SelectionneLigne('98', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('98', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=98','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '98');">
0.00</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='right'  onClick="javascript:SelectionneLigne('98', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('98', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=98','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '98');">
0.00</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('98', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('98', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=98','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '98');">

</td>
</tr>
<tr class='valeur' onmouseover="javascript:changerClasseRow(this, 'valeurOn');" onmouseout="javascript:changerClasseRow(this, 'valeur');" id='ligne_100' >
<td class='tableauCel' style=' padding:0px; margin:0px; vertical-align:middle; cursor:pointer;' onClick="javascript:SelectionneLigneOn('100', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=100','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '100');">
<img src='flaticons/ouvrir_fiche.png' style='width:16px;' alt='' border='0' id='loupeOverture100' style='vertical-align:middle;'>
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('100', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('100', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=100','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '100');">
<input type='checkbox' style='display:none;' id='checkbox_100' >

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('100', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('100', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=100','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '100');">
06/10/21
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('100', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('100', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=100','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '100');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('100', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('100', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=100','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '100');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('100', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('100', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=100','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '100');">
Ouvert
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('100', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('100', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=100','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '100');">

</td>
<td class='tableauCel' style='overflow:hidden; background-color:#FFFFFF; color:#000000;   white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('100', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('100', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=100','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '100');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('100', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('100', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=100','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '100');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('100', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('100', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=100','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '100');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('100', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('100', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=100','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '100');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('100', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('100', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=100','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '100');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('100', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('100', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=100','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '100');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='right'  onClick="javascript:SelectionneLigne('100', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('100', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=100','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '100');">
0.00</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='right'  onClick="javascript:SelectionneLigne('100', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('100', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=100','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '100');">
0.00</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('100', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('100', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=100','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '100');">

</td>
</tr>
<tr class='valeur' onmouseover="javascript:changerClasseRow(this, 'valeurOn');" onmouseout="javascript:changerClasseRow(this, 'valeur');" id='ligne_109' >
<td class='tableauCel' style=' padding:0px; margin:0px; vertical-align:middle; cursor:pointer;' onClick="javascript:SelectionneLigneOn('109', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=109','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '109');">
<img src='flaticons/ouvrir_fiche.png' style='width:16px;' alt='' border='0' id='loupeOverture109' style='vertical-align:middle;'>
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('109', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('109', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=109','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '109');">
<input type='checkbox' style='display:none;' id='checkbox_109' >

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('109', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('109', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=109','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '109');">
12/10/21
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('109', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('109', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=109','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '109');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('109', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('109', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=109','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '109');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('109', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('109', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=109','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '109');">
Ouvert
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('109', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('109', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=109','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '109');">

</td>
<td class='tableauCel' style='overflow:hidden; background-color:#FFFFFF; color:#000000;   white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('109', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('109', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=109','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '109');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('109', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('109', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=109','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '109');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('109', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('109', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=109','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '109');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('109', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('109', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=109','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '109');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('109', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('109', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=109','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '109');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('109', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('109', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=109','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '109');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='right'  onClick="javascript:SelectionneLigne('109', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('109', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=109','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '109');">
0.00</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='right'  onClick="javascript:SelectionneLigne('109', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('109', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=109','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '109');">
0.00</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('109', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('109', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=109','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '109');">

</td>
</tr>
<tr class='valeur' onmouseover="javascript:changerClasseRow(this, 'valeurOn');" onmouseout="javascript:changerClasseRow(this, 'valeur');" id='ligne_113' >
<td class='tableauCel' style=' padding:0px; margin:0px; vertical-align:middle; cursor:pointer;' onClick="javascript:SelectionneLigneOn('113', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=113','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '113');">
<img src='flaticons/ouvrir_fiche.png' style='width:16px;' alt='' border='0' id='loupeOverture113' style='vertical-align:middle;'>
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('113', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('113', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=113','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '113');">
<input type='checkbox' style='display:none;' id='checkbox_113' >

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('113', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('113', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=113','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '113');">
18/10/21
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('113', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('113', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=113','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '113');">
Incendie
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('113', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('113', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=113','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '113');">
RNS
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('113', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('113', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=113','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '113');">
Ouvert
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('113', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('113', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=113','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '113');">
Annick Mainguet
</td>
<td class='tableauCel' style='overflow:hidden; background-color:#FFFFFF; color:#000000;   white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('113', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('113', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=113','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '113');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('113', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('113', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=113','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '113');">
MAIF Service Sinistre 
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('113', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('113', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=113','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '113');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('113', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('113', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=113','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '113');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('113', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('113', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=113','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '113');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('113', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('113', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=113','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '113');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='right'  onClick="javascript:SelectionneLigne('113', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('113', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=113','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '113');">
0.00</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='right'  onClick="javascript:SelectionneLigne('113', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('113', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=113','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '113');">
0.00</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('113', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('113', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=113','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '113');">

</td>
</tr>
<tr class='valeur' onmouseover="javascript:changerClasseRow(this, 'valeurOn');" onmouseout="javascript:changerClasseRow(this, 'valeur');" id='ligne_114' >
<td class='tableauCel' style=' padding:0px; margin:0px; vertical-align:middle; cursor:pointer;' onClick="javascript:SelectionneLigneOn('114', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=114','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '114');">
<img src='flaticons/ouvrir_fiche.png' style='width:16px;' alt='' border='0' id='loupeOverture114' style='vertical-align:middle;'>
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('114', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('114', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=114','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '114');">
<input type='checkbox' style='display:none;' id='checkbox_114' >

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('114', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('114', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=114','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '114');">
23/10/21
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('114', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('114', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=114','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '114');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('114', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('114', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=114','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '114');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('114', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('114', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=114','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '114');">
Ouvert
</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('114', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('114', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=114','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '114');">

</td>
<td class='tableauCel' style='overflow:hidden; background-color:#FFFFFF; color:#000000;   white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('114', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('114', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=114','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '114');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('114', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('114', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=114','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '114');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('114', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('114', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=114','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '114');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('114', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('114', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=114','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '114');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('114', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('114', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=114','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '114');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('114', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('114', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=114','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '114');">

</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='right'  onClick="javascript:SelectionneLigne('114', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('114', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=114','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '114');">
0.00</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='right'  onClick="javascript:SelectionneLigne('114', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('114', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=114','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '114');">
0.00</td>
<td class='tableauCel' style='overflow:hidden;    white-space:nowrap;' align='left'  onClick="javascript:SelectionneLigne('114', 'valeur', 'valeurOn');" onDblClick="javascript:SelectionneLigneOn('114', 'valeur', 'valeurOn'); OuvreElement('fenetre_element.php?modeIHM=FENETRE&id=114','fenetreElement', '1349.3333333333', '933.66666666667', 'FENETRE', '114');">

</td>
</tr>
</table>
</div>
</form>
</td>
</tr>
</table>
</div>
</body>
</html>
<script language='javascript' type='text/javascript'>
reconstruction(false);
</script>`

// get dossier details
fetch("https://jaime.jlogiciels.fr/fenetre_element.php?modeIHM=FENETRE&id=116&hauteur=625&largeur=853&modeIHM=FENETRE", {
  "headers": {
    "accept": "*/*",
    "accept-language": "fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7",
    "content-type": "text/html; charset=UTF-8",
    "sec-ch-ua": "\"Google Chrome\";v=\"95\", \"Chromium\";v=\"95\", \";Not A Brand\";v=\"99\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin"
  },
  "referrer": "https://jaime.jlogiciels.fr/index.php",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": null,
  "method": "GET",
  "mode": "cors",
  "credentials": "include"
});

//response
`<form name='fenetre_element' method='post' action='index.php' style='display:inline;' accept-charset='utf-8'>
<table id='fenetreElement_tableauFenetre' border='0' cellpadding='0' cellspacing='0' style='padding:0px; margin:0px; '>
<tr>
<td onMouseOver="fnOnMouseOver('fenetreElement');" onMouseOut="fnOnMouseOver();" class='fenetreHautGauche'>
</td>
<td id='fenetreElement_barreFenetreHaut' class='fenetreHaut' style='vertical-align:middle;' onMouseOver="fnOnMouseOver('fenetreElement');" onMouseOut="fnOnMouseOver();">
<img src='images/logoJL.png' border='0' alt='' style='vertical-align:middle;'>  Propriétés
</td>
<td class='fenetreHaut' style='width:80px; padding:0px; margin:0px; text-align:right;' align='right'>
<input type='button' name='bouton_fermer' class='boutonFermer' onClick="javascript:cacheFenetreElement('fenetreElement', '116', false);">
<input type='button' name='bouton_pleinEcran' class='boutonPleinEcran' onClick="javascript:pleinEcranElmt();">
</td>
<td onMouseOver="fnOnMouseOver('fenetreElement');" onMouseOut="fnOnMouseOver();" class='fenetreHautDroite'>
</td>
</tr>
<tr>
<td class='fenetreGauche'>
</td>
<td colspan='2' class='fond_couleur_elmt' valign='top'>
<div id='div_fenetre_onglet' class='elmtOnglet'  style="">
<table  height='100%' border='0' cellpadding='0' cellspacing='0'>
<tr>
<td id='cellule_onglet_Général' valign='bottom' class='cellule_onglet_On' style='' onClick="javascript:afficheOnglet('Général', 'div_onglet_courant', '1');" onMouseOver="changeOnglet('Général', 'On', 'div_onglet_courant');" onMouseOut="changeOnglet('Général', 'Off', 'div_onglet_courant');">
<img id='img_Général' src='images/2016/Onglet/general_On.png' border='0'><br><nobr>Général</nobr>
</td>
<td id='cellule_onglet_Intervenants' valign='bottom' class='cellule_onglet_Off' style='' onClick="javascript:afficheOnglet('Intervenants', 'div_onglet_courant', '2');" onMouseOver="changeOnglet('Intervenants', 'On', 'div_onglet_courant');" onMouseOut="changeOnglet('Intervenants', 'Off', 'div_onglet_courant');">
<img id='img_Intervenants' src='images/2016/Onglet/defaut_Off.png' border='0'><br><nobr>Intervenants</nobr>
</td>
<td id='cellule_onglet_Suivi commercial' valign='bottom' class='cellule_onglet_Off' style='' onClick="javascript:afficheOnglet('Suivi commercial', 'div_onglet_courant', '3');" onMouseOver="changeOnglet('Suivi commercial', 'On', 'div_onglet_courant');" onMouseOut="changeOnglet('Suivi commercial', 'Off', 'div_onglet_courant');">
<img id='img_Suivi commercial' src='images/2016/Onglet/defaut_Off.png' border='0'><br><nobr>Suivi commercial</nobr>
</td>
<td id='cellule_onglet_Pièces jointes (_NbDocClas)' valign='bottom' class='cellule_onglet_Off' style='' onClick="javascript:afficheOnglet('Pièces jointes (_NbDocClas)', 'div_onglet_courant', '4');" onMouseOver="changeOnglet('Pièces jointes (_NbDocClas)', 'On', 'div_onglet_courant');" onMouseOut="changeOnglet('Pièces jointes (_NbDocClas)', 'Off', 'div_onglet_courant');">
<img id='img_Pièces jointes (_NbDocClas)' src='images/2016/Onglet/defaut_Off.png' border='0'><br><nobr>Pièces jointes (0)</nobr>
</td>
<td id='cellule_onglet_Mails' valign='bottom' class='cellule_onglet_Off' style='' onClick="javascript:afficheOnglet('Mails', 'div_onglet_courant', '5');" onMouseOver="changeOnglet('Mails', 'On', 'div_onglet_courant');" onMouseOut="changeOnglet('Mails', 'Off', 'div_onglet_courant');">
<img id='img_Mails' src='images/2016/Onglet/defaut_Off.png' border='0'><br><nobr>Mails</nobr>
</td>
</tr>
<tr>
<td id='cellule_onglet2_Général' valign='middle' class='cellule_onglet_point' style='' onClick="javascript:afficheOnglet('Général', 'div_onglet_courant', '1');" onMouseOver="changeOnglet('Général', 'On', 'div_onglet_courant');" onMouseOut="changeOnglet('Général', 'Off', 'div_onglet_courant');">
<hr><img id='img_point_Général' src='images/2016/Onglet/onglet_point_On.png' border='0'></td>
<td id='cellule_onglet2_Intervenants' valign='middle' class='cellule_onglet_point' style='' onClick="javascript:afficheOnglet('Intervenants', 'div_onglet_courant', '2');" onMouseOver="changeOnglet('Intervenants', 'On', 'div_onglet_courant');" onMouseOut="changeOnglet('Intervenants', 'Off', 'div_onglet_courant');">
<hr><img id='img_point_Intervenants' src='images/2016/Onglet/onglet_point_Off.png' border='0'></td>
<td id='cellule_onglet2_Suivi commercial' valign='middle' class='cellule_onglet_point' style='' onClick="javascript:afficheOnglet('Suivi commercial', 'div_onglet_courant', '3');" onMouseOver="changeOnglet('Suivi commercial', 'On', 'div_onglet_courant');" onMouseOut="changeOnglet('Suivi commercial', 'Off', 'div_onglet_courant');">
<hr><img id='img_point_Suivi commercial' src='images/2016/Onglet/onglet_point_Off.png' border='0'></td>
<td id='cellule_onglet2_Pièces jointes (_NbDocClas)' valign='middle' class='cellule_onglet_point' style='' onClick="javascript:afficheOnglet('Pièces jointes (_NbDocClas)', 'div_onglet_courant', '4');" onMouseOver="changeOnglet('Pièces jointes (_NbDocClas)', 'On', 'div_onglet_courant');" onMouseOut="changeOnglet('Pièces jointes (_NbDocClas)', 'Off', 'div_onglet_courant');">
<hr><img id='img_point_Pièces jointes (_NbDocClas)' src='images/2016/Onglet/onglet_point_Off.png' border='0'></td>
<td id='cellule_onglet2_Mails' valign='middle' class='cellule_onglet_point' style='' onClick="javascript:afficheOnglet('Mails', 'div_onglet_courant', '5');" onMouseOver="changeOnglet('Mails', 'On', 'div_onglet_courant');" onMouseOut="changeOnglet('Mails', 'Off', 'div_onglet_courant');">
<hr><img id='img_point_Mails' src='images/2016/Onglet/onglet_point_Off.png' border='0'></td>
</tr>
</table>
</div>
<div id='div_englobant_scrollable' class='div_englobant_scrollable' style='margin: 0pt; padding: 0pt; overflow: auto;'>
<div class='interieur_fenetre_elmt'>
<div id='div_onglet_courant' name='Général' style='display:none; width:1333.33px;  height:866.66666666667px;'>
</div>
<div id='div_Général' class='fond_interface_elmt' style='position:relative;  overflow:none; width:1311.33px;  height:855.66666666667px; '>
<input id='ChampsOnglet_Id' name='Id' value="116" type='hidden'>
<input id='ChampsOnglet_Utilisateur' name='Utilisateur' value="unipromotion.berthier" type='hidden'>
<input id='ChampsOnglet_DateMaj' name='DateMaj' value="2021-10-24" type='hidden'>
<input id='ChampsOnglet_UserMaj' name='UserMaj' value="unipromotion.berthier" type='hidden'>
<input id='ChampsOnglet_NoDocument' name='NoDocument' value="210020" type='hidden'>
<table id='Onglet1TableNumero1' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:19.333333333333px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;' id='table_etiquette_Reference'>
<td style='padding-right:5px;  width:115px;'>
</td>
<td style='padding-bottom:10px;'>
<div class='etiquette' style='color:#FFFFFF;  width:140px; '>
<nobr>Sinistre</nobr>
</div>
</td>
</table>
</td>
</tr>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet1TableNumero1SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_Reference' class='CelLib' style='width:115px;'>
Référence
</td>
<td id='cellule_attr_Reference' data-tableau='Onglet1TableNumero1' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_Reference' style='border:1px solid #646464;  ' onMouseOver="javascript:changeZindexManuel('Onglet1TableNumero1', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet1TableNumero1', '');" >
<input  class='champs' id='ChampsOnglet_Reference' name='Reference' autocomplete='off' value="UP210020/LYO/HSI" type='text' style='width:130px;border-width:0px; '  onBlur="javascript:appliqueFormules('Reference', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
<input id='ChampsOnglet_NomRisque' name='NomRisque' value="CABINET YASSIME - LOCATAIRE 2 Impasse de l'Adresse 10 13370 Mallemort" type='hidden'>
</table></td></tr>
</table>
<table id='Onglet1TableNumero2' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:86px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet1TableNumero2SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_DateCreation' class='CelLib' style='width:115px;'>
Date création
</td>
<td id='cellule_attr_DateCreation' data-tableau='Onglet1TableNumero2' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_DateCreation' style='border:1px solid #646464;  ' onMouseOver="javascript:changeZindexManuel('Onglet1TableNumero2', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet1TableNumero2', '');">
<input class='champs' autocomplete='off' id='ChampsOnglet_DateCreation' name='DateCreation' value="24/10/21" type='text' style='width:58.5px;border-width:0px; cursor:default; ' onClick="javascript:nePasChangerZindex('Onglet1TableNumero2', 'date');" onFocus="javascript:focusDate('ChampsOnglet_DateCreation'); select(); valeurInputEnCours=this.value;" onBlur="javascript:blurDate('ChampsOnglet_DateCreation', 'DateCreation', '116', '', '', '');"><img id='img_calendrier_ChampsOnglet_DateCreation' style='cursor:pointer; position:absolute; display:none;' border='0' src='images/Icones/calendrier.png' onMouseDown="javascript:ouvreCalendrier('calendrier.php?id=116&attr=DateCreation&id_input=ChampsOnglet_DateCreation&id_div=div_calendrier_DateCreation&val_input='+this.value+'&HR=21:57:13', 'div_calendrier_DateCreation', 'ChampsOnglet_DateCreation');">
</div>
</td>
</table></td></tr>
</table>
<table id='Onglet1TableNumero3' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:112.66666666667px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet1TableNumero3SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_TypeSinistre' class='CelLib' style='width:115px;'>
Type sinistre
</td>
<td id='cellule_attr_TypeSinistre' data-tableau='Onglet1TableNumero3' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_TypeSinistre' style='border:1px solid #646464; background-color:#ffc0c0; ' onMouseOver="javascript:changeZindexManuel('Onglet1TableNumero3', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet1TableNumero3', '');" >
<input  class='champs' id='ChampsOnglet_TypeSinistre' name='TypeSinistre' autocomplete='off' value="Hors sinistre" type='text' style='width:130px;border-width:0px; background-color:#ffc0c0;'  onBlur="javascript:appliqueFormules('TypeSinistre', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
<td id='cellule_bouton_TypeSinistre' style='vertical-align:top;'>
<input type='button' data-ident='' value=""  style="background:#ffffff url('images/icone_Dico.jpg') no-repeat top left; height:19px;  width:19px;  border-width:1px; cursor:pointer;" onClick="javascript:AfficheSuperDico('TypeSinistre', 'TypesSinistres', 'TypeSinistre>TypeSinistre;CodeSinistre>CodeSinistre;>BCRequis', '', '', '', '', false, false); return false;"></td>
<td id='cellule_lib_CodeSinistre' class='CelLib' style='padding-left:10px; width:76px;'>
Code sinistre
</td>
<td id='cellule_attr_CodeSinistre' data-tableau='Onglet1TableNumero3' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_CodeSinistre' style='border:1px solid #646464; background-color:#ffc0c0; ' onMouseOver="javascript:changeZindexManuel('Onglet1TableNumero3', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet1TableNumero3', '');" >
<input  class='champs' id='ChampsOnglet_CodeSinistre' name='CodeSinistre' autocomplete='off' value="HSI" type='text' style='width:65px;border-width:0px; background-color:#ffc0c0;'  onBlur="javascript:appliqueFormules('CodeSinistre', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
</table></td></tr>
</table>
<table id='Onglet1TableNumero4' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:139.33333333333px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet1TableNumero4SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_ComplTypeSinistre' class='CelLib' style='width:115px;'>
Complément
</td>
<td id='cellule_attr_ComplTypeSinistre' data-tableau='Onglet1TableNumero4' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_ComplTypeSinistre' style='border:1px inset #C1C1C1;  ' onMouseOver="javascript:changeZindexManuel('Onglet1TableNumero4', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet1TableNumero4', '');">
<input class='champs' autocomplete='off' id='ChampsOnglet_ComplTypeSinistre' name='ComplTypeSinistre' value="CatNat 2 Sud-Ouest septembre 2020" type='text' style='z-index:5;  width:178px;border-width:0px; ' readOnly='readOnly' onFocus="javascript:select(); valeurInputEnCours=this.value;"><img id='Image_ComplTypeSinistre' src='images/2016/bouton_bas.png' alt='' class='BoutDico' onClick="javascript:nePasChangerZindex('Onglet1TableNumero4', 'menu'); afficheCacheMenuDeroulant('listeComplTypeSinistre', 'ChampsOnglet_ComplTypeSinistre', 'Onglet1TableNumero4');" onMouseDown="javascript:this.src='images/2016/bouton_bas_click.png';" onMouseUp="javascript:this.src='images/2016/bouton_bas.png';">
</div>
<div id='listeComplTypeSinistre' style=' overflow-y:auto;overflow-x:hidden;position:fixed;display:none;z-index:5000;border:1px solid #C1C1C1;min-width:191px;background-color:#ffffff;padding:2;' onMouseOver="javascript:cacherMenuDeroulant = false;" onMouseOut="javascript:cacherMenuDeroulant = true;">
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_ComplTypeSinistre', 'CatNat 2 Sud-Ouest septembre 2020', 'listeComplTypeSinistre');appliqueFormules('ComplTypeSinistre', '116');"><nobr>CatNat 2 Sud-Ouest septembre 2020</nobr></div>
</div>
</td>
<td id='cellule_bouton_ComplTypeSinistre' style='vertical-align:top;'>
<input type='button' data-ident='' value="X"  style="" onClick="javascript:ViderAttributs('ComplTypeSinistre','ComplTypeSinistre', false); return false;"></td>
</table></td></tr>
</table>
<table id='Onglet1TableNumero5' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:166px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet1TableNumero5SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_OrigineDossier' class='CelLib' style='width:115px;'>
Origine dossier
</td>
<td id='cellule_attr_OrigineDossier' data-tableau='Onglet1TableNumero5' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_OrigineDossier' style='border:1px inset #C1C1C1;  ' onMouseOver="javascript:changeZindexManuel('Onglet1TableNumero5', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet1TableNumero5', '');">
<input class='champs' autocomplete='off' id='ChampsOnglet_OrigineDossier' name='OrigineDossier' value="Extranet Cie/Mut" type='text' style='z-index:5;  width:145.5px;border-width:0px; ' readOnly='readOnly' onFocus="javascript:select(); valeurInputEnCours=this.value;"><img id='Image_OrigineDossier' src='images/2016/bouton_bas.png' alt='' class='BoutDico' onClick="javascript:nePasChangerZindex('Onglet1TableNumero5', 'menu'); afficheCacheMenuDeroulant('listeOrigineDossier', 'ChampsOnglet_OrigineDossier', 'Onglet1TableNumero5');" onMouseDown="javascript:this.src='images/2016/bouton_bas_click.png';" onMouseUp="javascript:this.src='images/2016/bouton_bas.png';">
</div>
<div id='listeOrigineDossier' style=' overflow-y:auto;overflow-x:hidden;position:fixed;display:none;z-index:5000;border:1px solid #C1C1C1;min-width:158.5px;background-color:#ffffff;padding:2;' onMouseOver="javascript:cacherMenuDeroulant = false;" onMouseOut="javascript:cacherMenuDeroulant = true;">
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_OrigineDossier', 'Client Direct/Tiers conseil', 'listeOrigineDossier');appliqueFormules('OrigineDossier', '116');"><nobr>Client Direct/Tiers conseil</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_OrigineDossier', 'Expert Assuré', 'listeOrigineDossier');appliqueFormules('OrigineDossier', '116');"><nobr>Expert Assuré</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_OrigineDossier', 'Expert Cie/Mut', 'listeOrigineDossier');appliqueFormules('OrigineDossier', '116');"><nobr>Expert Cie/Mut</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_OrigineDossier', 'Extranet Cie/Mut', 'listeOrigineDossier');appliqueFormules('OrigineDossier', '116');"><nobr>Extranet Cie/Mut</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_OrigineDossier', 'Inspecteur Cie/Mut', 'listeOrigineDossier');appliqueFormules('OrigineDossier', '116');"><nobr>Inspecteur Cie/Mut</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_OrigineDossier', 'Mail Cie/Mut', 'listeOrigineDossier');appliqueFormules('OrigineDossier', '116');"><nobr>Mail Cie/Mut</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_OrigineDossier', 'Plateforme REN', 'listeOrigineDossier');appliqueFormules('OrigineDossier', '116');"><nobr>Plateforme REN</nobr></div>
</div>
</td>
<td id='cellule_bouton_OrigineDossier' style='vertical-align:top;'>
<input type='button' data-ident='' value="X"  style="" onClick="javascript:ViderAttributs('OrigineDossier','OrigineDossier', false); return false;"></td>
</table></td></tr>
</table>
<table id='Onglet1TableNumero6' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:192.66666666667px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet1TableNumero6SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_RegionUP' class='CelLib' style='width:115px;'>
Région UP
</td>
<td id='cellule_attr_RegionUP' data-tableau='Onglet1TableNumero6' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_RegionUP' style='border:1px solid #646464; background-color:#ffc0c0; ' onMouseOver="javascript:changeZindexManuel('Onglet1TableNumero6', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet1TableNumero6', '');" >
<input  class='champs' id='ChampsOnglet_RegionUP' name='RegionUP' autocomplete='off' value="Centre-Est" type='text' style='width:130px;border-width:0px; background-color:#ffc0c0;'  onBlur="javascript:appliqueFormules('RegionUP', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
<td id='cellule_bouton_RegionUP' style='vertical-align:top;'>
<input type='button' data-ident='' value=""  style="background:#ffffff url('images/icone_Dico.jpg') no-repeat top left; height:19px;  width:19px;  border-width:1px; cursor:pointer;" onClick="javascript:AfficheSuperDico('RegionUP', 'RegionUP', 'RegionUP>RegionUP;Code>CodeRegion', '', '', '', '', false, false); return false;"></td>
<td id='cellule_lib_CodeRegion' class='CelLib' style='padding-left:10px; width:22px;'>
Code
</td>
<td id='cellule_attr_CodeRegion' data-tableau='Onglet1TableNumero6' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_CodeRegion' style='border:1px solid #646464; background-color:#ffc0c0; ' onMouseOver="javascript:changeZindexManuel('Onglet1TableNumero6', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet1TableNumero6', '');" >
<input  class='champs' id='ChampsOnglet_CodeRegion' name='CodeRegion' autocomplete='off' value="LYO" type='text' style='width:32.5px;border-width:0px; background-color:#ffc0c0;'  onBlur="javascript:appliqueFormules('CodeRegion', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
</table></td></tr>
</table>
<table id='Onglet1TableNumero7' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:219.33333333333px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet1TableNumero7SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_DossierParent' class='CelLib' style='width:115px;'>
Dossier parent/référent
</td>
<td id='cellule_attr_DossierParent' data-tableau='Onglet1TableNumero7' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_DossierParent' style='border:1px solid #646464;  ' onMouseOver="javascript:changeZindexManuel('Onglet1TableNumero7', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet1TableNumero7', '');" >
<input  class='champs' id='ChampsOnglet_DossierParent' name='DossierParent' autocomplete='off' value="UP210013/IDF/3DP" type='text' style='width:65px;border-width:0px; '  onBlur="javascript:appliqueFormules('DossierParent', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
<td id='cellule_attr_IdDossier' data-tableau='Onglet1TableNumero7' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_IdDossier' style='border:1px solid #646464;  ' onMouseOver="javascript:changeZindexManuel('Onglet1TableNumero7', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet1TableNumero7', '');" onDblClick="javascript:RechOuvertureDist('UP_Dossiers', 'Id', 'IdDossier', 'IdDossier');">
<input  class='champs' id='ChampsOnglet_IdDossier' name='IdDossier' autocomplete='off' value="79" type='text' style='width:39px;border-width:0px; '  onBlur="javascript:appliqueFormules('IdDossier', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
<td id='cellule_bouton_IdDossier' style='vertical-align:top;'>
<input type='button' data-ident='' value=""  style="background:#ffffff url('images/icone_Dico.jpg') no-repeat top left; height:19px;  width:19px;  border-width:1px; cursor:pointer;" onClick="javascript:AfficheSuperDico('IdDossier', 'UP_Dossiers', 'Reference>DossierParent;Id>IdDossier', '', '', '', '', false, false); return false;"><input type='button' data-ident='' value="X"  style="" onClick="javascript:ViderAttributs('IdDossier','DossierParent;IdDossier', false); return false;"></td>
</table></td></tr>
</table>
<table id='Onglet1TableNumero8' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:246px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet1TableNumero8SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_Etat' class='CelLib' style='width:115px;'>
Etat dossier
</td>
<td id='cellule_attr_Etat' data-tableau='Onglet1TableNumero8' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_Etat' style='border:1px inset #C1C1C1;  ' onMouseOver="javascript:changeZindexManuel('Onglet1TableNumero8', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet1TableNumero8', '');">
<input class='champs' autocomplete='off' id='ChampsOnglet_Etat' name='Etat' value="Ouvert" type='text' style='z-index:5;  width:113px;border-width:0px; ' readOnly='readOnly' onFocus="javascript:select(); valeurInputEnCours=this.value;"><img id='Image_Etat' src='images/2016/bouton_bas.png' alt='' class='BoutDico' onClick="javascript:nePasChangerZindex('Onglet1TableNumero8', 'menu'); afficheCacheMenuDeroulant('listeEtat', 'ChampsOnglet_Etat', 'Onglet1TableNumero8');" onMouseDown="javascript:this.src='images/2016/bouton_bas_click.png';" onMouseUp="javascript:this.src='images/2016/bouton_bas.png';">
</div>
<div id='listeEtat' style=' overflow-y:auto;overflow-x:hidden;position:fixed;display:none;z-index:5000;border:1px solid #C1C1C1;min-width:126px;background-color:#ffffff;padding:2;' onMouseOver="javascript:cacherMenuDeroulant = false;" onMouseOut="javascript:cacherMenuDeroulant = true;">
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_Etat', 'Ouvert', 'listeEtat');appliqueFormules('Etat', '116');"><nobr>Ouvert</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_Etat', 'Clôturé', 'listeEtat');appliqueFormules('Etat', '116');"><nobr>Clôturé</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_Etat', 'Classé sans suite', 'listeEtat');appliqueFormules('Etat', '116');"><nobr>Classé sans suite</nobr></div>
</div>
</td>
</table></td></tr>
</table>
<table id='Onglet1TableNumero9' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:19.333333333333px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;' id='table_etiquette_NomPrenom'>
<td style='padding-right:5px;  width:628.33px;'>
</td>
<td style='padding-bottom:10px;'>
<div class='etiquette' style='color:#FFFFFF;  width:140px; '>
<nobr>Client</nobr>
</div>
</td>
</table>
</td>
</tr>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet1TableNumero9SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_NomPrenom' class='CelLib' style='width:628.33px;'>
Client
</td>
<td id='cellule_attr_NomPrenom' data-tableau='Onglet1TableNumero9' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_NomPrenom' style='border:1px inset #C1C1C1; background-color:#ffc0c0; ' onMouseOver="javascript:changeZindexManuel('Onglet1TableNumero9', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet1TableNumero9', '');" >
<input onKeyDown="javascript:keyDownAutoCompletions(this, 'Clients', 'NomPrenom', 'NomPrenom>NomPrenom;Prefixe>Prefixe;Adresse1>Adresse1;Compte>NoClient;Adresse2>Adresse2;CP>CP;Ville>Ville;Pays>Pays;TVAIntra>TVAIntra;TypeClient>TypeClient;Tel>Tel;TeP>TeP;Email>Email;TContacts>TContacts;DeuxTelephone>DeuxTelephone;DeuxEmail>DeuxEmail;Contact>Contact;SiteInt>SiteInt;Fax>Fax');" class='champs' id='ChampsOnglet_NomPrenom' name='NomPrenom' autocomplete='off' value="CABINET YASSIME" type='text' style='width:182px;border-width:0px; background-color:#ffc0c0;'  onBlur="javascript:appliqueFormules('NomPrenom', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
<td id='cellule_bouton_NomPrenom' style='vertical-align:top;'>
<input type='button' data-ident='B10' value=""  style="background:#ffffff url('images/IconesAppli/Clients.gif') no-repeat top left; height:19px;  width:19px;  border-width:1px; cursor:pointer;" onClick="javascript:AfficheSuperDico('NomPrenom', 'Clients', 'NomPrenom>NomPrenom;Prefixe>Prefixe;Adresse1>Adresse1;Compte>NoClient;Adresse2>Adresse2;CP>CP;Ville>Ville;Pays>Pays;TVAIntra>TVAIntra;TypeClient>TypeClient;Tel>Tel;TeP>TeP;Email>Email;TContacts>TContacts;DeuxTelephone>DeuxTelephone;DeuxEmail>DeuxEmail;Contact>Contact;SiteInt>SiteInt;Fax>Fax;AgenceClientRaisonSociale>AgenceClientRaisonSociale;AgenceClientId>AgenceClientId', '', '', '', '', false, false); return false;"><input type='button' data-ident='B20' value=""  style="background:#ffffff url('images/Icones/chercher.gif') no-repeat top left; height:19px;  width:19px;  border-width:1px; cursor:pointer;" onClick="javascript:AfficheSuperDicoRechercher('Clients', 'NomPrenom>NomPrenom;Prefixe>Prefixe;Adresse1>Adresse1;Compte>NoClient;Adresse2>Adresse2;CP>CP;Ville>Ville;Pays>Pays;TVAIntra>TVAIntra;TypeClient>TypeClient;Tel>Tel;TeP>TeP;Email>Email;TContacts>TContacts;DeuxTelephone>DeuxTelephone;DeuxEmail>DeuxEmail;Contact>Contact;SiteInt>SiteInt;Fax>Fax', 'NomPrenom', 'Rechercher un texte dans les noms de clients', '', '', 'NomPrenom', false, 'NomPrenom'); return false;"></td>
<td id='cellule_lib_Prefixe' class='CelLib' style='padding-left:10px; width:29.67px;'>
Prefixe
</td>
<td id='cellule_attr_Prefixe' data-tableau='Onglet1TableNumero9' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_Prefixe' style='border:1px inset #C1C1C1;  ' onMouseOver="javascript:changeZindexManuel('Onglet1TableNumero9', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet1TableNumero9', '');">
<input class='champs' autocomplete='off' id='ChampsOnglet_Prefixe' name='Prefixe' value="Cabinet" type='text' style=' width:48px;border-width:0px; '  onBlur="javascript:appliqueFormules('Prefixe', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"><img id='Image_Prefixe' src='images/2016/bouton_bas.png' alt='' class='BoutDico' onClick="javascript:nePasChangerZindex('Onglet1TableNumero9', 'menu'); afficheCacheMenuDeroulant('listePrefixe', 'ChampsOnglet_Prefixe', 'Onglet1TableNumero9');" onMouseDown="javascript:this.src='images/2016/bouton_bas_click.png';" onMouseUp="javascript:this.src='images/2016/bouton_bas.png';">
</div>
<div id='listePrefixe' style='height:110px; overflow-y:auto;overflow-x:hidden;position:fixed;display:none;z-index:5000;border:1px solid #C1C1C1;min-width:61px;background-color:#ffffff;padding:2;' onMouseOver="javascript:cacherMenuDeroulant = false;" onMouseOut="javascript:cacherMenuDeroulant = true;">
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_Prefixe', 'M.', 'listePrefixe');appliqueFormules('Prefixe', '116');"><nobr>M.</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_Prefixe', 'Mme', 'listePrefixe');appliqueFormules('Prefixe', '116');"><nobr>Mme</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_Prefixe', 'Melle', 'listePrefixe');appliqueFormules('Prefixe', '116');"><nobr>Melle</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_Prefixe', 'M & Mme', 'listePrefixe');appliqueFormules('Prefixe', '116');"><nobr>M & Mme</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_Prefixe', 'M & M', 'listePrefixe');appliqueFormules('Prefixe', '116');"><nobr>M & M</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_Prefixe', 'Mme & Mme', 'listePrefixe');appliqueFormules('Prefixe', '116');"><nobr>Mme & Mme</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_Prefixe', 'Melle & Melle', 'listePrefixe');appliqueFormules('Prefixe', '116');"><nobr>Melle & Melle</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_Prefixe', 'SA', 'listePrefixe');appliqueFormules('Prefixe', '116');"><nobr>SA</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_Prefixe', 'SARL', 'listePrefixe');appliqueFormules('Prefixe', '116');"><nobr>SARL</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_Prefixe', 'SAS', 'listePrefixe');appliqueFormules('Prefixe', '116');"><nobr>SAS</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_Prefixe', 'EURL', 'listePrefixe');appliqueFormules('Prefixe', '116');"><nobr>EURL</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_Prefixe', 'Société', 'listePrefixe');appliqueFormules('Prefixe', '116');"><nobr>Société</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_Prefixe', 'Entreprise', 'listePrefixe');appliqueFormules('Prefixe', '116');"><nobr>Entreprise</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_Prefixe', 'Etablissement', 'listePrefixe');appliqueFormules('Prefixe', '116');"><nobr>Etablissement</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_Prefixe', 'Administration', 'listePrefixe');appliqueFormules('Prefixe', '116');"><nobr>Administration</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_Prefixe', 'Cabinet', 'listePrefixe');appliqueFormules('Prefixe', '116');"><nobr>Cabinet</nobr></div>
</div>
</td>
<td id='cellule_lib_ForcerCreationClient' class='CelLib' style='padding-left:10px; width:94px;'>
Nouveau client ?
</td>
<td id='cellule_attr_ForcerCreationClient' data-tableau='Onglet1TableNumero9' style='vertical-align:top;'>
<input id='Checkbox_ForcerCreationClient'  type='checkbox'  onClick="javascript:ClickCheckboxChamp('ForcerCreationClient', '116');"><input id='ChampsOnglet_ForcerCreationClient' name='ForcerCreationClient' autocomplete='off' value="0" type='hidden'></td>
<input id='ChampsOnglet_TContacts' name='TContacts' value="EnTeTe:ClE_InTeRnE&curren;NomPrenom&curren;Prefixe&curren;Service&curren;Telephone&curren;Fax&curren;TelP&curren;Email&curren;str_LigneContact|&curren;EXPERT YASSIME&curren;&curren;Technicien&curren;&curren;&curren;&curren;Yassime@outlook.com&curren;EXPERT YASSIME / Technicien /  /  / Yassime@outlook.com ;|&curren;ASSISTANTE YASSIME&curren;&curren;Secr&eacute;tariat&curren;&curren;&curren;&curren;&curren;ASSISTANTE YASSIME / Secr&eacute;tariat /  /  /  ;" type='hidden'>
<input id='ChampsOnglet_Fax' name='Fax' value="" type='hidden'>
</table></td></tr>
</table>
<table id='Onglet1TableNumero10' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:86px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet1TableNumero10SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_Adresse1' class='CelLib' style='width:628.33px;'>
Adresse
</td>
<td id='cellule_attr_Adresse1' data-tableau='Onglet1TableNumero10' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_Adresse1' style='border:1px inset #C1C1C1;  ' onMouseOver="javascript:changeZindexManuel('Onglet1TableNumero10', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet1TableNumero10', '');" >
<input onKeyDown="javascript:keyDownAutoCompletions(this, 'AdressesPostalesGouv', 'Adresse1', 'Ville>Ville;CP>CP;Adresse1>Adresse1;Adresse2>Adresse2;Pays>Pays');" class='champs' id='ChampsOnglet_Adresse1' name='Adresse1' autocomplete='off' value="Avenue michel bizot" type='text' style='width:182px;border-width:0px; '  onBlur="javascript:appliqueFormules('Adresse1', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
<td id='cellule_lib_Tel' class='CelLib' style='padding-left:10px; width:67.67px;'>
Tél.
</td>
<td id='cellule_attr_Tel' data-tableau='Onglet1TableNumero10' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_Tel' style='border:1px inset #C1C1C1;  ' onMouseOver="javascript:changeZindexManuel('Onglet1TableNumero10', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet1TableNumero10', '');" >
<input  class='champs' id='ChampsOnglet_Tel' name='Tel' autocomplete='off' value="" type='text' style='width:97.5px;border-width:0px; '  onBlur="javascript:appliqueFormules('Tel', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
</table></td></tr>
</table>
<table id='Onglet1TableNumero11' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:112.66666666667px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet1TableNumero11SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_Adresse2' class='CelLib' style='width:628.33px;'>
 
</td>
<td id='cellule_attr_Adresse2' data-tableau='Onglet1TableNumero11' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_Adresse2' style='border:1px inset #C1C1C1;  ' onMouseOver="javascript:changeZindexManuel('Onglet1TableNumero11', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet1TableNumero11', '');" >
<input  class='champs' id='ChampsOnglet_Adresse2' name='Adresse2' autocomplete='off' value="" type='text' style='width:182px;border-width:0px; '  onBlur="javascript:appliqueFormules('Adresse2', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
<td id='cellule_lib_DeuxTelephone' class='CelLib' style='padding-left:10px; width:67.67px;'>
Tél 2
</td>
<td id='cellule_attr_DeuxTelephone' data-tableau='Onglet1TableNumero11' style='vertical-align:top;'>
<div class='div_champs' title="Téléphone 2" id='div_englobant_DeuxTelephone' style='border:1px inset #C1C1C1;  ' onMouseOver="javascript:changeZindexManuel('Onglet1TableNumero11', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet1TableNumero11', '');" >
<input  class='champs' id='ChampsOnglet_DeuxTelephone' name='DeuxTelephone' autocomplete='off' value="" type='text' style='width:97.5px;border-width:0px; '  onBlur="javascript:appliqueFormules('DeuxTelephone', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
</table></td></tr>
</table>
<table id='Onglet1TableNumero12' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:139.33333333333px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet1TableNumero12SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_CP' class='CelLib' style='width:628.33px;'>
CP
</td>
<td id='cellule_attr_CP' data-tableau='Onglet1TableNumero12' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_CP' style='border:1px inset #C1C1C1;  ' onMouseOver="javascript:changeZindexManuel('Onglet1TableNumero12', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet1TableNumero12', '');" >
<input  class='champs' id='ChampsOnglet_CP' name='CP' autocomplete='off' value="75012" type='text' style='width:39px;border-width:0px; '  onBlur="javascript:appliqueFormules('CP', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
<td id='cellule_lib_Ville' class='CelLib' style='padding-left:10px; width:28px;'>
Ville
</td>
<td id='cellule_attr_Ville' data-tableau='Onglet1TableNumero12' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_Ville' style='border:1px inset #C1C1C1;  ' onMouseOver="javascript:changeZindexManuel('Onglet1TableNumero12', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet1TableNumero12', '');" >
<input  class='champs' id='ChampsOnglet_Ville' name='Ville' autocomplete='off' value="Paris" type='text' style='width:110.5px;border-width:0px; '  onBlur="javascript:appliqueFormules('Ville', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
<td id='cellule_lib_TeP' class='CelLib' style='padding-left:10px; width:55.17px;'>
Tél.P
</td>
<td id='cellule_attr_TeP' data-tableau='Onglet1TableNumero12' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_TeP' style='border:1px inset #C1C1C1;  ' onMouseOver="javascript:changeZindexManuel('Onglet1TableNumero12', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet1TableNumero12', '');" >
<input  class='champs' id='ChampsOnglet_TeP' name='TeP' autocomplete='off' value="" type='text' style='width:97.5px;border-width:0px; '  onBlur="javascript:appliqueFormules('TeP', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
</table></td></tr>
</table>
<table id='Onglet1TableNumero13' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:166px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet1TableNumero13SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_Pays' class='CelLib' style='width:628.33px;'>
Pays
</td>
<td id='cellule_attr_Pays' data-tableau='Onglet1TableNumero13' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_Pays' style='border:1px inset #C1C1C1;  ' onMouseOver="javascript:changeZindexManuel('Onglet1TableNumero13', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet1TableNumero13', '');" >
<input  class='champs' id='ChampsOnglet_Pays' name='Pays' autocomplete='off' value="France" type='text' style='width:97.5px;border-width:0px; '  onBlur="javascript:appliqueFormules('Pays', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
<td id='cellule_lib_Email' class='CelLib' style='padding-left:10px; width:152.17px;'>
Email
</td>
<td id='cellule_attr_Email' data-tableau='Onglet1TableNumero13' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_Email' style='border:1px inset #C1C1C1;  ' onMouseOver="javascript:changeZindexManuel('Onglet1TableNumero13', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet1TableNumero13', '');" >
<input  class='champs' id='ChampsOnglet_Email' name='Email' autocomplete='off' value="Yassime@outlook.com" type='text' style='width:214.5px;border-width:0px; '  onBlur="javascript:appliqueFormules('Email', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
</table></td></tr>
</table>
<table id='Onglet1TableNumero14' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:192.66666666667px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet1TableNumero14SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_TVAIntra' class='CelLib' style='width:628.33px;'>
TVA Intra
</td>
<td id='cellule_attr_TVAIntra' data-tableau='Onglet1TableNumero14' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_TVAIntra' style='border:1px inset #C1C1C1;  ' onMouseOver="javascript:changeZindexManuel('Onglet1TableNumero14', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet1TableNumero14', '');" >
<input  class='champs' id='ChampsOnglet_TVAIntra' name='TVAIntra' autocomplete='off' value="" type='text' style='width:97.5px;border-width:0px; '  onBlur="javascript:appliqueFormules('TVAIntra', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
<td id='cellule_lib_DeuxEmail' class='CelLib' style='padding-left:10px; width:152.17px;'>
Email 2
</td>
<td id='cellule_attr_DeuxEmail' data-tableau='Onglet1TableNumero14' style='vertical-align:top;'>
<div class='div_champs' title="Email 2" id='div_englobant_DeuxEmail' style='border:1px inset #C1C1C1;  ' onMouseOver="javascript:changeZindexManuel('Onglet1TableNumero14', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet1TableNumero14', '');" >
<input  class='champs' id='ChampsOnglet_DeuxEmail' name='DeuxEmail' autocomplete='off' value="" type='text' style='width:214.5px;border-width:0px; '  onBlur="javascript:appliqueFormules('DeuxEmail', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
</table></td></tr>
</table>
<table id='Onglet1TableNumero15' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:219.33333333333px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet1TableNumero15SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_Contact' class='CelLib' style='width:628.33px;'>
Contact
</td>
<td id='cellule_attr_Contact' data-tableau='Onglet1TableNumero15' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_Contact' style='border:1px inset #C1C1C1;  ' onMouseOver="javascript:changeZindexManuel('Onglet1TableNumero15', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet1TableNumero15', '');" >
<input  class='champs' id='ChampsOnglet_Contact' name='Contact' autocomplete='off' value="" type='text' style='width:214.5px;border-width:0px; '  onBlur="javascript:appliqueFormules('Contact', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
</table></td></tr>
</table>
<table id='Onglet1TableNumero16' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:246px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet1TableNumero16SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_TypeClient' class='CelLib' style='width:628.33px;'>
Type client
</td>
<td id='cellule_attr_TypeClient' data-tableau='Onglet1TableNumero16' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_TypeClient' style='border:1px inset #C1C1C1;  ' onMouseOver="javascript:changeZindexManuel('Onglet1TableNumero16', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet1TableNumero16', '');">
<input class='champs' autocomplete='off' id='ChampsOnglet_TypeClient' name='TypeClient' value="" type='text' style=' width:80.5px;border-width:0px; '  onBlur="javascript:appliqueFormules('TypeClient', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"><img id='Image_TypeClient' src='images/2016/bouton_bas.png' alt='' class='BoutDico' onClick="javascript:nePasChangerZindex('Onglet1TableNumero16', 'menu'); afficheCacheMenuDeroulant('listeTypeClient', 'ChampsOnglet_TypeClient', 'Onglet1TableNumero16');" onMouseDown="javascript:this.src='images/2016/bouton_bas_click.png';" onMouseUp="javascript:this.src='images/2016/bouton_bas.png';">
</div>
<div id='listeTypeClient' style=' overflow-y:auto;overflow-x:hidden;position:fixed;display:none;z-index:5000;border:1px solid #C1C1C1;min-width:93.5px;background-color:#ffffff;padding:2;' onMouseOver="javascript:cacherMenuDeroulant = false;" onMouseOut="javascript:cacherMenuDeroulant = true;">
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_TypeClient', 'Particulier', 'listeTypeClient');appliqueFormules('TypeClient', '116');"><nobr>Particulier</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_TypeClient', 'Entreprise', 'listeTypeClient');appliqueFormules('TypeClient', '116');"><nobr>Entreprise</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_TypeClient', 'Syndic', 'listeTypeClient');appliqueFormules('TypeClient', '116');"><nobr>Syndic</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_TypeClient', 'Bailleur', 'listeTypeClient');appliqueFormules('TypeClient', '116');"><nobr>Bailleur</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_TypeClient', 'Association', 'listeTypeClient');appliqueFormules('TypeClient', '116');"><nobr>Association</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_TypeClient', 'SCI', 'listeTypeClient');appliqueFormules('TypeClient', '116');"><nobr>SCI</nobr></div>
</div>
</td>
<td id='cellule_lib_SiteInt' class='CelLib' style='padding-left:10px; width:152.17px;'>
Site Internet
</td>
<td id='cellule_attr_SiteInt' data-tableau='Onglet1TableNumero16' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_SiteInt' style='border:1px inset #C1C1C1;  ' onMouseOver="javascript:changeZindexManuel('Onglet1TableNumero16', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet1TableNumero16', '');" >
<input  class='champs' id='ChampsOnglet_SiteInt' name='SiteInt' autocomplete='off' value="" type='text' style='width:214.5px;border-width:0px; '  onBlur="javascript:appliqueFormules('SiteInt', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
<td id='cellule_bouton_SiteInt' style='vertical-align:top;'>
<input type='button' data-ident='' value=""  style="background:#ffffff url('images/icone_Internet.gif') no-repeat top left; height:19px;  width:19px;  border-width:1px; cursor:pointer;" onClick="javascript:ClickBoutonInternet('SiteInt', '', ''); return false;"></td>
</table></td></tr>
</table>
<table id='Onglet1TableNumero17' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:272.66666666667px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet1TableNumero17SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_NoClient' class='CelLib' style='width:628.33px;'>
N°
</td>
<td id='cellule_attr_NoClient' data-tableau='Onglet1TableNumero17' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_NoClient' style='border:1px solid #646464; background-color:#ffc0c0; ' onMouseOver="javascript:changeZindexManuel('Onglet1TableNumero17', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet1TableNumero17', '');" onDblClick="javascript:RechOuvertureDist('Clients', 'Compte', 'NoClient', 'NoClient');">
<input  class='champs' id='ChampsOnglet_NoClient' name='NoClient' autocomplete='off' value="8" type='text' style='width:65px;border-width:0px; background-color:#ffc0c0;'  onBlur="javascript:appliqueFormules('NoClient', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
</table></td></tr>
</table>
<table id='Onglet1TableNumero18' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:272.66666666667px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet1TableNumero18SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_BoutCreerClient' class='CelLib' style='width:696.33px;'>

</td>
<td id='cellule_bouton_BoutCreerClient' style='vertical-align:top;'>
<input type='button' data-ident='B10' value="Créer le client avec les informations ci-dessus"  style="" onClick="javascript:ClickBoutonGeneInstance('Clients', 'NomPrenom>NomPrenom;Prefixe>Prefixe;Adresse1>Adresse1;Adresse2>Adresse2;CP>CP;Ville>Ville;Pays>Pays;TVAIntra>TVAIntra;Tel>Tel;TeP>TeP;Email>Email;TypeClient>TypeClient;DeuxTelephone>DeuxTelephone;DeuxEmail>DeuxEmail;Contact>Contact;SiteInt>SiteInt', 'NoClient', 'Compte', 'Clients', 'N°client', '', '', '>AdrLivr;NomPrenom>NomPreLivr;Prefixe>PrefLivr;Adresse1>Adr1Livr;Adresse2>Adr2Livr;CP>CLivr;Ville>VilLivr;Pays>PayLivr;Tel>TLivr;TeP>PortLivr', false); return false;"></td>
</table></td></tr>
</table>
<table id='Onglet1TableNumero19' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:272.66666666667px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet1TableNumero19SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_BoutMAJClient' class='CelLib' style='width:696.33px;'>

</td>
<td id='cellule_bouton_BoutMAJClient' style='vertical-align:top;'>
<input type='button' data-ident='' value="X"  style="" onClick="javascript:ViderAttributs('BoutMAJClient','NomPrenom;Prefixe;Adresse1;NoClient;Adresse2;CP;Ville;Pays;TVAIntra;TypeClient;Tel;TeP;Email;TContacts;DeuxTelephone;DeuxEmail;Contact;SiteInt', false); return false;"></td>
</table></td></tr>
</table>
<table id='Onglet1TableNumero20' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:299.33333333333px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet1TableNumero20SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_RefCommandeClient' class='CelLib' style='width:628.33px;'>
Réf. commande client
</td>
<td id='cellule_attr_RefCommandeClient' data-tableau='Onglet1TableNumero20' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_RefCommandeClient' style='border:1px solid #646464;  ' onMouseOver="javascript:changeZindexManuel('Onglet1TableNumero20', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet1TableNumero20', '');" >
<input  class='champs' id='ChampsOnglet_RefCommandeClient' name='RefCommandeClient' autocomplete='off' value="" type='text' style='width:65px;border-width:0px; '  onBlur="javascript:appliqueFormules('RefCommandeClient', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
</table></td></tr>
</table>
<table id='Onglet1TableNumero21' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:326px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet1TableNumero21SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_BCRequis' class='CelLib' style='width:628.33px;'>
Dossier à bon de commande ?
</td>
<td id='cellule_attr_BCRequis' data-tableau='Onglet1TableNumero21' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_BCRequis' style='border:1px inset #C1C1C1;  ' onMouseOver="javascript:changeZindexManuel('Onglet1TableNumero21', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet1TableNumero21', '');">
<input class='champs' autocomplete='off' id='ChampsOnglet_BCRequis' name='BCRequis' value="NON" type='text' style='z-index:5;  width:48px;border-width:0px; ' readOnly='readOnly' onFocus="javascript:select(); valeurInputEnCours=this.value;"><img id='Image_BCRequis' src='images/2016/bouton_bas.png' alt='' class='BoutDico' onClick="javascript:nePasChangerZindex('Onglet1TableNumero21', 'menu'); afficheCacheMenuDeroulant('listeBCRequis', 'ChampsOnglet_BCRequis', 'Onglet1TableNumero21');" onMouseDown="javascript:this.src='images/2016/bouton_bas_click.png';" onMouseUp="javascript:this.src='images/2016/bouton_bas.png';">
</div>
<div id='listeBCRequis' style=' overflow-y:auto;overflow-x:hidden;position:fixed;display:none;z-index:5000;border:1px solid #C1C1C1;min-width:61px;background-color:#ffffff;padding:2;' onMouseOver="javascript:cacherMenuDeroulant = false;" onMouseOut="javascript:cacherMenuDeroulant = true;">
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_BCRequis', 'NON', 'listeBCRequis');appliqueFormules('BCRequis', '116');"><nobr>NON</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_BCRequis', 'OUI', 'listeBCRequis');appliqueFormules('BCRequis', '116');"><nobr>OUI</nobr></div>
</div>
</td>
</table></td></tr>
</table>
<table id='Onglet1TableNumero22' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:316px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;' id='table_etiquette_LivrDifferente'>
<td style='padding-right:5px;  width:115px;'>
</td>
<td style='padding-bottom:10px;'>
<div class='etiquette' style='color:#FFFFFF;  width:140px; '>
<nobr>Adresse du risque</nobr>
</div>
</td>
</table>
</td>
</tr>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet1TableNumero22SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_LivrDifferente' class='CelLib' style='width:115px;'>
 
</td>
<td id='cellule_attr_LivrDifferente' data-tableau='Onglet1TableNumero22' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_LivrDifferente' style='border:1px inset #C1C1C1; background-color:#ffc0c0; ' onMouseOver="javascript:changeZindexManuel('Onglet1TableNumero22', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet1TableNumero22', '');">
<input class='champs' autocomplete='off' id='ChampsOnglet_LivrDifferente' name='LivrDifferente' value="AUTRE_ADRESSE" type='text' style='z-index:5;  width:100px;border-width:0px; background-color:#ffc0c0;' readOnly='readOnly' onFocus="javascript:select(); valeurInputEnCours=this.value;"><img id='Image_LivrDifferente' src='images/2016/bouton_bas.png' alt='' class='BoutDico' onClick="javascript:nePasChangerZindex('Onglet1TableNumero22', 'menu'); afficheCacheMenuDeroulant('listeLivrDifferente', 'ChampsOnglet_LivrDifferente', 'Onglet1TableNumero22');" onMouseDown="javascript:this.src='images/2016/bouton_bas_click.png';" onMouseUp="javascript:this.src='images/2016/bouton_bas.png';">
</div>
<div id='listeLivrDifferente' style=' overflow-y:auto;overflow-x:hidden;position:fixed;display:none;z-index:5000;border:1px solid #C1C1C1;min-width:113px;background-color:#ffffff;padding:2;' onMouseOver="javascript:cacherMenuDeroulant = false;" onMouseOut="javascript:cacherMenuDeroulant = true;">
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_LivrDifferente', '', 'listeLivrDifferente');appliqueFormules('LivrDifferente', '116');"><nobr>&nbsp;</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_LivrDifferente', 'ADRESSE_CLIENT', 'listeLivrDifferente');appliqueFormules('LivrDifferente', '116');"><nobr>ADRESSE_CLIENT</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_LivrDifferente', 'AUTRE_ADRESSE', 'listeLivrDifferente');appliqueFormules('LivrDifferente', '116');"><nobr>AUTRE_ADRESSE</nobr></div>
</div>
</td>
</table></td></tr>
</table>
<table id='Onglet1TableNumero23' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:382.66666666667px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet1TableNumero23SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_NomLivr' class='CelLib' style='width:115px;'>
Nom
</td>
<td id='cellule_attr_NomLivr' data-tableau='Onglet1TableNumero23' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_NomLivr' style='border:1px inset #C1C1C1;  ' onMouseOver="javascript:changeZindexManuel('Onglet1TableNumero23', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet1TableNumero23', '');" >
<input  class='champs' id='ChampsOnglet_NomLivr' name='NomLivr' autocomplete='off' value="LOCATAIRE 2" type='text' style='width:182px;border-width:0px; '  onBlur="javascript:appliqueFormules('NomLivr', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
<td id='cellule_bouton_NomLivr' style='vertical-align:top;'>
<input type='button' data-ident='' value=""  style="background:#ffffff url('images/IconesAppli/Clients.gif') no-repeat top left; height:19px;  width:19px;  border-width:1px; cursor:pointer;" onClick="javascript:AfficheSuperDico('NomLivr', 'ListeAdresseLivrClientDiEzENoClient=NoClient', 'AUTRE_ADRESSE>LivrDifferente;NomPrenom>NomLivr;Adresse1>Adr1Livr;Adresse2>Adr2Livr;CP>CLivr;Ville>VilLivr;TelL>TLivr;TelPort>PortLivr', '', '', '', '', false, false); return false;"><input type='button' data-ident='' value=""  style="background:#ffffff url('images/IconesAppli/Clients.gif') no-repeat top left; height:19px;  width:19px;  border-width:1px; cursor:pointer;" onClick="javascript:AfficheSuperDico('NomLivr', 'ListeAdresseLivrClient', 'AUTRE_ADRESSE>LivrDifferente;NomPrenom>NomLivr;Adresse1>Adr1Livr;Adresse2>Adr2Livr;CP>CLivr;Ville>VilLivr;TelL>TLivr;TelPort>PortLivr', '', '', '', '', false, false); return false;"></td>
<td id='cellule_lib_LivrPrefixe' class='CelLib' style='padding-left:10px; width:29.67px;'>
 
</td>
<td id='cellule_attr_LivrPrefixe' data-tableau='Onglet1TableNumero23' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_LivrPrefixe' style='border:1px inset #C1C1C1;  ' onMouseOver="javascript:changeZindexManuel('Onglet1TableNumero23', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet1TableNumero23', '');">
<input class='champs' autocomplete='off' id='ChampsOnglet_LivrPrefixe' name='LivrPrefixe' value="Mme" type='text' style=' width:48px;border-width:0px; '  onBlur="javascript:appliqueFormules('LivrPrefixe', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"><img id='Image_LivrPrefixe' src='images/2016/bouton_bas.png' alt='' class='BoutDico' onClick="javascript:nePasChangerZindex('Onglet1TableNumero23', 'menu'); afficheCacheMenuDeroulant('listeLivrPrefixe', 'ChampsOnglet_LivrPrefixe', 'Onglet1TableNumero23');" onMouseDown="javascript:this.src='images/2016/bouton_bas_click.png';" onMouseUp="javascript:this.src='images/2016/bouton_bas.png';">
</div>
<div id='listeLivrPrefixe' style='height:110px; overflow-y:auto;overflow-x:hidden;position:fixed;display:none;z-index:5000;border:1px solid #C1C1C1;min-width:61px;background-color:#ffffff;padding:2;' onMouseOver="javascript:cacherMenuDeroulant = false;" onMouseOut="javascript:cacherMenuDeroulant = true;">
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_LivrPrefixe', 'M.', 'listeLivrPrefixe');appliqueFormules('LivrPrefixe', '116');"><nobr>M.</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_LivrPrefixe', 'Mme', 'listeLivrPrefixe');appliqueFormules('LivrPrefixe', '116');"><nobr>Mme</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_LivrPrefixe', 'Melle', 'listeLivrPrefixe');appliqueFormules('LivrPrefixe', '116');"><nobr>Melle</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_LivrPrefixe', 'M & Mme', 'listeLivrPrefixe');appliqueFormules('LivrPrefixe', '116');"><nobr>M & Mme</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_LivrPrefixe', 'M & M', 'listeLivrPrefixe');appliqueFormules('LivrPrefixe', '116');"><nobr>M & M</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_LivrPrefixe', 'Mme & Mme', 'listeLivrPrefixe');appliqueFormules('LivrPrefixe', '116');"><nobr>Mme & Mme</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_LivrPrefixe', 'Melle & Melle', 'listeLivrPrefixe');appliqueFormules('LivrPrefixe', '116');"><nobr>Melle & Melle</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_LivrPrefixe', 'SA', 'listeLivrPrefixe');appliqueFormules('LivrPrefixe', '116');"><nobr>SA</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_LivrPrefixe', 'SARL', 'listeLivrPrefixe');appliqueFormules('LivrPrefixe', '116');"><nobr>SARL</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_LivrPrefixe', 'SAS', 'listeLivrPrefixe');appliqueFormules('LivrPrefixe', '116');"><nobr>SAS</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_LivrPrefixe', 'EURL', 'listeLivrPrefixe');appliqueFormules('LivrPrefixe', '116');"><nobr>EURL</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_LivrPrefixe', 'Société', 'listeLivrPrefixe');appliqueFormules('LivrPrefixe', '116');"><nobr>Société</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_LivrPrefixe', 'Entreprise', 'listeLivrPrefixe');appliqueFormules('LivrPrefixe', '116');"><nobr>Entreprise</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_LivrPrefixe', 'Etablissement', 'listeLivrPrefixe');appliqueFormules('LivrPrefixe', '116');"><nobr>Etablissement</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_LivrPrefixe', 'Administration', 'listeLivrPrefixe');appliqueFormules('LivrPrefixe', '116');"><nobr>Administration</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_LivrPrefixe', 'Cabinet', 'listeLivrPrefixe');appliqueFormules('LivrPrefixe', '116');"><nobr>Cabinet</nobr></div>
</div>
</td>
</table></td></tr>
</table>
<table id='Onglet1TableNumero24' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:409.33333333333px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet1TableNumero24SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_Adr1Livr' class='CelLib' style='width:115px;'>
Adresse
</td>
<td id='cellule_attr_Adr1Livr' data-tableau='Onglet1TableNumero24' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_Adr1Livr' style='border:1px inset #C1C1C1;  ' onMouseOver="javascript:changeZindexManuel('Onglet1TableNumero24', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet1TableNumero24', '');" >
<input onKeyDown="javascript:keyDownAutoCompletions(this, 'AdressesPostalesGouv', 'Adr1Livr', 'Ville>VilLivr;CP>CLivr;Adresse1>Adr1Livr;Adresse2>Adr2Livr');" class='champs' id='ChampsOnglet_Adr1Livr' name='Adr1Livr' autocomplete='off' value="Impasse de l'Adresse 10" type='text' style='width:182px;border-width:0px; '  onBlur="javascript:appliqueFormules('Adr1Livr', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
<td id='cellule_lib_TLivr' class='CelLib' style='padding-left:10px; width:67.67px;'>
Tél.
</td>
<td id='cellule_attr_TLivr' data-tableau='Onglet1TableNumero24' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_TLivr' style='border:1px inset #C1C1C1;  ' onMouseOver="javascript:changeZindexManuel('Onglet1TableNumero24', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet1TableNumero24', '');" >
<input  class='champs' id='ChampsOnglet_TLivr' name='TLivr' autocomplete='off' value="" type='text' style='width:97.5px;border-width:0px; '  onBlur="javascript:appliqueFormules('TLivr', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
</table></td></tr>
</table>
<table id='Onglet1TableNumero25' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:436px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet1TableNumero25SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_Adr2Livr' class='CelLib' style='width:115px;'>
 
</td>
<td id='cellule_attr_Adr2Livr' data-tableau='Onglet1TableNumero25' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_Adr2Livr' style='border:1px inset #C1C1C1;  ' onMouseOver="javascript:changeZindexManuel('Onglet1TableNumero25', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet1TableNumero25', '');" >
<input  class='champs' id='ChampsOnglet_Adr2Livr' name='Adr2Livr' autocomplete='off' value="" type='text' style='width:182px;border-width:0px; '  onBlur="javascript:appliqueFormules('Adr2Livr', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
<td id='cellule_lib_DeuxTLivr' class='CelLib' style='padding-left:10px; width:67.67px;'>
Tél. 2
</td>
<td id='cellule_attr_DeuxTLivr' data-tableau='Onglet1TableNumero25' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_DeuxTLivr' style='border:1px inset #C1C1C1;  ' onMouseOver="javascript:changeZindexManuel('Onglet1TableNumero25', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet1TableNumero25', '');" >
<input  class='champs' id='ChampsOnglet_DeuxTLivr' name='DeuxTLivr' autocomplete='off' value="" type='text' style='width:97.5px;border-width:0px; '  onBlur="javascript:appliqueFormules('DeuxTLivr', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
</table></td></tr>
</table>
<table id='Onglet1TableNumero26' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:462.66666666667px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet1TableNumero26SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_CLivr' class='CelLib' style='width:115px;'>
CP
</td>
<td id='cellule_attr_CLivr' data-tableau='Onglet1TableNumero26' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_CLivr' style='border:1px inset #C1C1C1;  ' onMouseOver="javascript:changeZindexManuel('Onglet1TableNumero26', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet1TableNumero26', '');" >
<input  class='champs' id='ChampsOnglet_CLivr' name='CLivr' autocomplete='off' value="13370" type='text' style='width:39px;border-width:0px; '  onBlur="javascript:appliqueFormules('CLivr', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
<td id='cellule_attr_VilLivr' data-tableau='Onglet1TableNumero26' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_VilLivr' style='border:1px inset #C1C1C1;  ' onMouseOver="javascript:changeZindexManuel('Onglet1TableNumero26', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet1TableNumero26', '');" >
<input  class='champs' id='ChampsOnglet_VilLivr' name='VilLivr' autocomplete='off' value="Mallemort" type='text' style='width:143px;border-width:0px; '  onBlur="javascript:appliqueFormules('VilLivr', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
<td id='cellule_bouton_VilLivr' style='vertical-align:top;'>
<input type='button' data-ident='' value=""  style="background:#ffffff url('images/icone_chercher.gif') no-repeat top left; height:19px;  width:19px;  border-width:1px; cursor:pointer;" onClick="javascript:AfficheSuperDicoRechercher('ToutesLesVillesCommun', 'Ville>VilLivr;CodePostal>CLivr', 'Ville', 'Ville ou code postal de livraison', '', '', 'VilLivr', false, 'VilLivr'); return false;"></td>
<td id='cellule_lib_PortLivr' class='CelLib' style='padding-left:10px; width:46.67px;'>
Tél. P
</td>
<td id='cellule_attr_PortLivr' data-tableau='Onglet1TableNumero26' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_PortLivr' style='border:1px inset #C1C1C1;  ' onMouseOver="javascript:changeZindexManuel('Onglet1TableNumero26', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet1TableNumero26', '');" >
<input  class='champs' id='ChampsOnglet_PortLivr' name='PortLivr' autocomplete='off' value="" type='text' style='width:97.5px;border-width:0px; '  onBlur="javascript:appliqueFormules('PortLivr', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
</table></td></tr>
</table>
<table id='Onglet1TableNumero27' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:489.33333333333px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet1TableNumero27SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_LivrContact' class='CelLib' style='width:115px;'>
Contact
</td>
<td id='cellule_attr_LivrContact' data-tableau='Onglet1TableNumero27' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_LivrContact' style='border:1px inset #C1C1C1;  ' onMouseOver="javascript:changeZindexManuel('Onglet1TableNumero27', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet1TableNumero27', '');" >
<input  class='champs' id='ChampsOnglet_LivrContact' name='LivrContact' autocomplete='off' value="" type='text' style='width:214.5px;border-width:0px; '  onBlur="javascript:appliqueFormules('LivrContact', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
</table></td></tr>
</table>
<table id='Onglet1TableNumero28' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:516px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet1TableNumero28SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_LivrMail' class='CelLib' style='width:115px;'>
Email
</td>
<td id='cellule_attr_LivrMail' data-tableau='Onglet1TableNumero28' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_LivrMail' style='border:1px inset #C1C1C1;  ' onMouseOver="javascript:changeZindexManuel('Onglet1TableNumero28', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet1TableNumero28', '');" >
<input  class='champs' id='ChampsOnglet_LivrMail' name='LivrMail' autocomplete='off' value="" type='text' style='width:214.5px;border-width:0px; '  onBlur="javascript:appliqueFormules('LivrMail', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
</table></td></tr>
</table>
<table id='Onglet1TableNumero29' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:542.66666666667px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet1TableNumero29SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_LivrDeuxMail' class='CelLib' style='width:115px;'>
Email 2
</td>
<td id='cellule_attr_LivrDeuxMail' data-tableau='Onglet1TableNumero29' style='vertical-align:top;'>
<div class='div_champs' title="Email 2" id='div_englobant_LivrDeuxMail' style='border:1px inset #C1C1C1;  ' onMouseOver="javascript:changeZindexManuel('Onglet1TableNumero29', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet1TableNumero29', '');" >
<input  class='champs' id='ChampsOnglet_LivrDeuxMail' name='LivrDeuxMail' autocomplete='off' value="" type='text' style='width:214.5px;border-width:0px; '  onBlur="javascript:appliqueFormules('LivrDeuxMail', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
</table></td></tr>
</table>
<table id='Onglet1TableNumero30' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:569.33333333333px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet1TableNumero30SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_BoutCreerLivr' class='CelLib' style='width:115px;'>

</td>
<input id='ChampsOnglet_BoutCreerLivr' name='BoutCreerLivr' value="" type='hidden'>
<td id='cellule_bouton_BoutCreerLivr' style='vertical-align:top;'>
<input type='button' data-ident='' value="Créer l'adresse du risque"  style="" onClick="javascript:ClickBoutonGeneInstance('ListeAdresseLivrClient', 'NoClient>NoClient;NomLivr>NomPrenom;Adr1Livr>Adresse1;Adr2Livr>Adresse2;CLivr>CP;VilLivr>Ville;TLivr>TelL;PortLivr>TelPort', '', '', 'Adresses livraison', '', 'LivrDifferente', 'AUTRE_ADRESSE', '', false); return false;"></td>
</table></td></tr>
</table>
<table id='Onglet1TableNumero31' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:596px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet1TableNumero31SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_leg_interlocuteur_risque' class='CelLib' style='width:115px;'>

</td>
<td id='cellule_attr_leg_interlocuteur_risque' data-tableau='Onglet1TableNumero31' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_leg_interlocuteur_risque' style='border:1px solid transparent; background-color:transparent; overflow:hidden; height:16px;   cursor:default;' onMouseOver="javascript:changeZindexManuel('Onglet1TableNumero31', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet1TableNumero31', '');" >
<div id='div_champs_non_modif_leg_interlocuteur_risque' style='width:195px;'></div>
</div>
</td>
</table></td></tr>
</table>
<table id='Onglet1TableNumero32' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:622.66666666667px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet1TableNumero32SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_IntLivrContact' class='CelLib' style='width:115px;'>
Nom
</td>
<td id='cellule_attr_IntLivrContact' data-tableau='Onglet1TableNumero32' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_IntLivrContact' style='border:1px inset #C1C1C1;  ' onMouseOver="javascript:changeZindexManuel('Onglet1TableNumero32', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet1TableNumero32', '');" >
<input  class='champs' id='ChampsOnglet_IntLivrContact' name='IntLivrContact' autocomplete='off' value="" type='text' style='width:214.5px;border-width:0px; '  onBlur="javascript:appliqueFormules('IntLivrContact', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
<td id='cellule_lib_IntLivrPrefixe' class='CelLib' style='padding-left:10px; width:35.17px;'>
 
</td>
<td id='cellule_attr_IntLivrPrefixe' data-tableau='Onglet1TableNumero32' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_IntLivrPrefixe' style='border:1px inset #C1C1C1;  ' onMouseOver="javascript:changeZindexManuel('Onglet1TableNumero32', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet1TableNumero32', '');">
<input class='champs' autocomplete='off' id='ChampsOnglet_IntLivrPrefixe' name='IntLivrPrefixe' value="" type='text' style=' width:48px;border-width:0px; '  onBlur="javascript:appliqueFormules('IntLivrPrefixe', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"><img id='Image_IntLivrPrefixe' src='images/2016/bouton_bas.png' alt='' class='BoutDico' onClick="javascript:nePasChangerZindex('Onglet1TableNumero32', 'menu'); afficheCacheMenuDeroulant('listeIntLivrPrefixe', 'ChampsOnglet_IntLivrPrefixe', 'Onglet1TableNumero32');" onMouseDown="javascript:this.src='images/2016/bouton_bas_click.png';" onMouseUp="javascript:this.src='images/2016/bouton_bas.png';">
</div>
<div id='listeIntLivrPrefixe' style='height:110px; overflow-y:auto;overflow-x:hidden;position:fixed;display:none;z-index:5000;border:1px solid #C1C1C1;min-width:61px;background-color:#ffffff;padding:2;' onMouseOver="javascript:cacherMenuDeroulant = false;" onMouseOut="javascript:cacherMenuDeroulant = true;">
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_IntLivrPrefixe', 'M.', 'listeIntLivrPrefixe');appliqueFormules('IntLivrPrefixe', '116');"><nobr>M.</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_IntLivrPrefixe', 'Mme', 'listeIntLivrPrefixe');appliqueFormules('IntLivrPrefixe', '116');"><nobr>Mme</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_IntLivrPrefixe', 'Melle', 'listeIntLivrPrefixe');appliqueFormules('IntLivrPrefixe', '116');"><nobr>Melle</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_IntLivrPrefixe', 'M & Mme', 'listeIntLivrPrefixe');appliqueFormules('IntLivrPrefixe', '116');"><nobr>M & Mme</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_IntLivrPrefixe', 'M & M', 'listeIntLivrPrefixe');appliqueFormules('IntLivrPrefixe', '116');"><nobr>M & M</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_IntLivrPrefixe', 'Mme & Mme', 'listeIntLivrPrefixe');appliqueFormules('IntLivrPrefixe', '116');"><nobr>Mme & Mme</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_IntLivrPrefixe', 'Melle & Melle', 'listeIntLivrPrefixe');appliqueFormules('IntLivrPrefixe', '116');"><nobr>Melle & Melle</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_IntLivrPrefixe', 'SA', 'listeIntLivrPrefixe');appliqueFormules('IntLivrPrefixe', '116');"><nobr>SA</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_IntLivrPrefixe', 'SARL', 'listeIntLivrPrefixe');appliqueFormules('IntLivrPrefixe', '116');"><nobr>SARL</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_IntLivrPrefixe', 'SAS', 'listeIntLivrPrefixe');appliqueFormules('IntLivrPrefixe', '116');"><nobr>SAS</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_IntLivrPrefixe', 'EURL', 'listeIntLivrPrefixe');appliqueFormules('IntLivrPrefixe', '116');"><nobr>EURL</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_IntLivrPrefixe', 'Société', 'listeIntLivrPrefixe');appliqueFormules('IntLivrPrefixe', '116');"><nobr>Société</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_IntLivrPrefixe', 'Entreprise', 'listeIntLivrPrefixe');appliqueFormules('IntLivrPrefixe', '116');"><nobr>Entreprise</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_IntLivrPrefixe', 'Etablissement', 'listeIntLivrPrefixe');appliqueFormules('IntLivrPrefixe', '116');"><nobr>Etablissement</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_IntLivrPrefixe', 'Administration', 'listeIntLivrPrefixe');appliqueFormules('IntLivrPrefixe', '116');"><nobr>Administration</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_IntLivrPrefixe', 'Cabinet', 'listeIntLivrPrefixe');appliqueFormules('IntLivrPrefixe', '116');"><nobr>Cabinet</nobr></div>
</div>
</td>
</table></td></tr>
</table>
<table id='Onglet1TableNumero33' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:649.33333333333px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet1TableNumero33SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_IntTLivr' class='CelLib' style='width:115px;'>
Tél.
</td>
<td id='cellule_attr_IntTLivr' data-tableau='Onglet1TableNumero33' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_IntTLivr' style='border:1px inset #C1C1C1;  ' onMouseOver="javascript:changeZindexManuel('Onglet1TableNumero33', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet1TableNumero33', '');" >
<input  class='champs' id='ChampsOnglet_IntTLivr' name='IntTLivr' autocomplete='off' value="" type='text' style='width:97.5px;border-width:0px; '  onBlur="javascript:appliqueFormules('IntTLivr', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
<td id='cellule_lib_IntPortLivr' class='CelLib' style='padding-left:10px; width:152.17px;'>
Tél. P
</td>
<td id='cellule_attr_IntPortLivr' data-tableau='Onglet1TableNumero33' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_IntPortLivr' style='border:1px inset #C1C1C1;  ' onMouseOver="javascript:changeZindexManuel('Onglet1TableNumero33', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet1TableNumero33', '');" >
<input  class='champs' id='ChampsOnglet_IntPortLivr' name='IntPortLivr' autocomplete='off' value="" type='text' style='width:97.5px;border-width:0px; '  onBlur="javascript:appliqueFormules('IntPortLivr', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
</table></td></tr>
</table>
<table id='Onglet1TableNumero34' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:676px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet1TableNumero34SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_IntFax' class='CelLib' style='width:115px;'>
Fax int. risque
</td>
<td id='cellule_attr_IntFax' data-tableau='Onglet1TableNumero34' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_IntFax' style='border:1px inset #C1C1C1;  ' onMouseOver="javascript:changeZindexManuel('Onglet1TableNumero34', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet1TableNumero34', '');" >
<input  class='champs' id='ChampsOnglet_IntFax' name='IntFax' autocomplete='off' value="" type='text' style='width:97.5px;border-width:0px; '  onBlur="javascript:appliqueFormules('IntFax', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
</table></td></tr>
</table>
<table id='Onglet1TableNumero35' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:702.66666666667px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet1TableNumero35SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_IntLivrMail' class='CelLib' style='width:115px;'>
Email
</td>
<td id='cellule_attr_IntLivrMail' data-tableau='Onglet1TableNumero35' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_IntLivrMail' style='border:1px inset #C1C1C1;  ' onMouseOver="javascript:changeZindexManuel('Onglet1TableNumero35', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet1TableNumero35', '');" >
<input  class='champs' id='ChampsOnglet_IntLivrMail' name='IntLivrMail' autocomplete='off' value="" type='text' style='width:214.5px;border-width:0px; '  onBlur="javascript:appliqueFormules('IntLivrMail', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
</table></td></tr>
</table>
<table id='Onglet1TableNumero36' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:729.33333333333px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet1TableNumero36SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_IntLivrDeuxMail' class='CelLib' style='width:115px;'>
Email 2
</td>
<td id='cellule_attr_IntLivrDeuxMail' data-tableau='Onglet1TableNumero36' style='vertical-align:top;'>
<div class='div_champs' title="Email 2" id='div_englobant_IntLivrDeuxMail' style='border:1px inset #C1C1C1;  ' onMouseOver="javascript:changeZindexManuel('Onglet1TableNumero36', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet1TableNumero36', '');" >
<input  class='champs' id='ChampsOnglet_IntLivrDeuxMail' name='IntLivrDeuxMail' autocomplete='off' value="" type='text' style='width:214.5px;border-width:0px; '  onBlur="javascript:appliqueFormules('IntLivrDeuxMail', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
</table></td></tr>
</table>
<table id='Onglet1TableNumero37' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:382.66666666667px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet1TableNumero37SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_TypBatiment' class='CelLib' style='width:628.33px;'>
Type bâtiment
</td>
<td id='cellule_attr_TypBatiment' data-tableau='Onglet1TableNumero37' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_TypBatiment' style='border:1px inset #C1C1C1;  ' onMouseOver="javascript:changeZindexManuel('Onglet1TableNumero37', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet1TableNumero37', '');" >
<input  class='champs' id='ChampsOnglet_TypBatiment' name='TypBatiment' autocomplete='off' value="" type='text' style='width:214.5px;border-width:0px; '  onBlur="javascript:appliqueFormules('TypBatiment', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
</table></td></tr>
</table>
<table id='Onglet1TableNumero38' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:409.33333333333px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet1TableNumero38SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_Immeuble' class='CelLib' style='width:628.33px;'>
Immeuble
</td>
<td id='cellule_attr_Immeuble' data-tableau='Onglet1TableNumero38' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_Immeuble' style='border:1px inset #C1C1C1;  ' onMouseOver="javascript:changeZindexManuel('Onglet1TableNumero38', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet1TableNumero38', '');" >
<input  class='champs' id='ChampsOnglet_Immeuble' name='Immeuble' autocomplete='off' value="" type='text' style='width:214.5px;border-width:0px; '  onBlur="javascript:appliqueFormules('Immeuble', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
<td id='cellule_lib_Etage' class='CelLib' style='padding-left:10px; width:28px;'>
Etage
</td>
<td id='cellule_attr_Etage' data-tableau='Onglet1TableNumero38' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_Etage' style='border:1px inset #C1C1C1;  ' onMouseOver="javascript:changeZindexManuel('Onglet1TableNumero38', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet1TableNumero38', '');" >
<input  class='champs' id='ChampsOnglet_Etage' name='Etage' autocomplete='off' value="" type='text' style='width:58.5px;border-width:0px; '  onBlur="javascript:appliqueFormules('Etage', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
<td id='cellule_lib_NoLogement' class='CelLib' style='padding-left:10px; width:52px;'>
N° porte
</td>
<td id='cellule_attr_NoLogement' data-tableau='Onglet1TableNumero38' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_NoLogement' style='border:1px inset #C1C1C1;  ' onMouseOver="javascript:changeZindexManuel('Onglet1TableNumero38', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet1TableNumero38', '');" >
<input  class='champs' id='ChampsOnglet_NoLogement' name='NoLogement' autocomplete='off' value="" type='text' style='width:58.5px;border-width:0px; '  onBlur="javascript:appliqueFormules('NoLogement', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
</table></td></tr>
</table>
<table id='Onglet1TableNumero39' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:436px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet1TableNumero39SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_ProtectEntree' class='CelLib' style='width:628.33px;'>
Accès entrée
</td>
<td id='cellule_attr_ProtectEntree' data-tableau='Onglet1TableNumero39' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_ProtectEntree' style='border:1px inset #C1C1C1;  ' onMouseOver="javascript:changeZindexManuel('Onglet1TableNumero39', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet1TableNumero39', '');">
<input class='champs' autocomplete='off' id='ChampsOnglet_ProtectEntree' name='ProtectEntree' value="" type='text' style='z-index:5;  width:80.5px;border-width:0px; ' readOnly='readOnly' onFocus="javascript:select(); valeurInputEnCours=this.value;"><img id='Image_ProtectEntree' src='images/2016/bouton_bas.png' alt='' class='BoutDico' onClick="javascript:nePasChangerZindex('Onglet1TableNumero39', 'menu'); afficheCacheMenuDeroulant('listeProtectEntree', 'ChampsOnglet_ProtectEntree', 'Onglet1TableNumero39');" onMouseDown="javascript:this.src='images/2016/bouton_bas_click.png';" onMouseUp="javascript:this.src='images/2016/bouton_bas.png';">
</div>
<div id='listeProtectEntree' style=' overflow-y:auto;overflow-x:hidden;position:fixed;display:none;z-index:5000;border:1px solid #C1C1C1;min-width:93.5px;background-color:#ffffff;padding:2;' onMouseOver="javascript:cacherMenuDeroulant = false;" onMouseOut="javascript:cacherMenuDeroulant = true;">
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_ProtectEntree', '', 'listeProtectEntree');appliqueFormules('ProtectEntree', '116');"><nobr>&nbsp;</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_ProtectEntree', 'Code d\'accès', 'listeProtectEntree');appliqueFormules('ProtectEntree', '116');"><nobr>Code d'accès</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_ProtectEntree', 'Interphone', 'listeProtectEntree');appliqueFormules('ProtectEntree', '116');"><nobr>Interphone</nobr></div>
</div>
</td>
<td id='cellule_lib_ComProtectEntree' class='CelLib' style='padding-left:10px; width:64px;'>
Commentaire
</td>
<td id='cellule_attr_ComProtectEntree' data-tableau='Onglet1TableNumero39' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_ComProtectEntree' style='border:1px inset #C1C1C1;  ' onMouseOver="javascript:changeZindexManuel('Onglet1TableNumero39', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet1TableNumero39', '');" >
<input  class='champs' id='ChampsOnglet_ComProtectEntree' name='ComProtectEntree' autocomplete='off' value="" type='text' style='width:325px;border-width:0px; '  onBlur="javascript:appliqueFormules('ComProtectEntree', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
</table></td></tr>
</table>
<table id='Onglet1TableNumero40' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:462.66666666667px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet1TableNumero40SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_LivrInfos' class='CelLib' style='width:628.33px;'>
Présence de
</td>
<td id='cellule_attr_LivrInfos' data-tableau='Onglet1TableNumero40' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_LivrInfos' style='overflow: auto; width:97.5px; height:65px; border:1px solid transparent; background-color:transparent;' onMouseOver="javascript:changeZindexManuel('Onglet1TableNumero40', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet1TableNumero40', '');">
<input type='checkbox'  onChange="javascript:appliqueFormules('LivrInfos', '116');" id='ChampsOnglet_LivrInfos_val1' name='LivrInfos__val1__checklist' value="Ascenseur" style='vertical-align:middle;'><label for='ChampsOnglet_LivrInfos_val1'>Ascenseur</label><br>
<input type='checkbox'  onChange="javascript:appliqueFormules('LivrInfos', '116');" id='ChampsOnglet_LivrInfos_val2' name='LivrInfos__val2__checklist' value="Electricité" style='vertical-align:middle;'><label for='ChampsOnglet_LivrInfos_val2'>Electricité</label><br>
<input type='checkbox'  onChange="javascript:appliqueFormules('LivrInfos', '116');" id='ChampsOnglet_LivrInfos_val3' name='LivrInfos__val3__checklist' value="Eau" style='vertical-align:middle;'><label for='ChampsOnglet_LivrInfos_val3'>Eau</label><br>
<input type='checkbox'  onChange="javascript:appliqueFormules('LivrInfos', '116');" id='ChampsOnglet_LivrInfos_val4' name='LivrInfos__val4__checklist' value="Aéraulique" style='vertical-align:middle;'><label for='ChampsOnglet_LivrInfos_val4'>Aéraulique</label><br>
</div>
</td>
<input id='ChampsOnglet_TInterlocuteurs' name='TInterlocuteurs' value="EnTeTe:ClE_InTeRnE&curren;Type&curren;NomPrenom&curren;Prefixe&curren;Adresse1&curren;Adresse2&curren;CP&curren;Ville&curren;Tel&curren;DeuxTelephone&curren;TeP&curren;Fax&curren;Email&curren;DeuxMail&curren;Reference&curren;AccordCadre|&curren;Client&curren;CABINET YASSIME&curren;Cabinet&curren;Avenue michel bizot&curren;&curren;75012&curren;Paris&curren;&curren;&curren;&curren;&curren;Yassime@outlook.com&curren;&curren;&curren;&curren;|&curren;Risque&curren;LOCATAIRE 2&curren;Mme&curren;Impasse de l'Adresse 10&curren;&curren;13370&curren;Mallemort&curren;&curren;&curren;&curren;&curren;&curren;&curren;&curren;" type='hidden'>
</table></td></tr>
</table>
<table id='Onglet1TableNumero41' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:489.33333333333px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet1TableNumero41SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_HBGroupe' class='CelLib' style='width:415px;'>
HB Groupe
</td>
<td id='cellule_attr_HBGroupe' data-tableau='Onglet1TableNumero41' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_HBGroupe' style='border:1px inset #C1C1C1;  ' onMouseOver="javascript:changeZindexManuel('Onglet1TableNumero41', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet1TableNumero41', '');" >
<input  class='champs' id='ChampsOnglet_HBGroupe' name='HBGroupe' autocomplete='off' value="" type='text' style='width:136.5px;border-width:0px; '  onBlur="javascript:appliqueFormules('HBGroupe', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
</table></td></tr>
</table>
<table id='Onglet1TableNumero42' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:516px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet1TableNumero42SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_UGLocataire' class='CelLib' style='width:415px;'>
UG Locataire
</td>
<td id='cellule_attr_UGLocataire' data-tableau='Onglet1TableNumero42' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_UGLocataire' style='border:1px inset #C1C1C1;  ' onMouseOver="javascript:changeZindexManuel('Onglet1TableNumero42', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet1TableNumero42', '');" >
<input  class='champs' id='ChampsOnglet_UGLocataire' name='UGLocataire' autocomplete='off' value="" type='text' style='width:136.5px;border-width:0px; '  onBlur="javascript:appliqueFormules('UGLocataire', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
</table></td></tr>
</table>
<table id='Onglet1TableNumero43' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:542.66666666667px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet1TableNumero43SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_RisqueComAcces' class='CelLib' style='width:415px;'>
Accès
</td>
<td id='cellule_attr_RisqueComAcces' data-tableau='Onglet1TableNumero43' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_RisqueComAcces' style=' border:1px inset #C1C1C1;  ' onMouseOver="javascript:changeZindexManuel('Onglet1TableNumero43', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet1TableNumero43', '');">
<textarea class='champs' id='ChampsOnglet_RisqueComAcces' data-type='TEXT2' name='RisqueComAcces' style='width:136.5px; height:60px; border-width:0px; '  onBlur="javascript:appliqueFormules('RisqueComAcces', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;">
</textarea>
</div>
</td>
</table></td></tr>
</table>
<table id='Onglet1TableNumero44' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:382.66666666667px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;' id='table_etiquette_AgenceClientRaisonSociale'>
<td style='padding-right:5px;  width:628.33px;'>
</td>
<td style='padding-bottom:10px;'>
<div class='etiquette' style='color:#FFFFFF;  width:140px; '>
<nobr>Agence du client</nobr>
</div>
</td>
</table>
</td>
</tr>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet1TableNumero44SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_AgenceClientRaisonSociale' class='CelLib' style='width:628.33px;'>
Nom
</td>
<td id='cellule_attr_AgenceClientRaisonSociale' data-tableau='Onglet1TableNumero44' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_AgenceClientRaisonSociale' style='border:1px solid #646464;  ' onMouseOver="javascript:changeZindexManuel('Onglet1TableNumero44', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet1TableNumero44', '');" >
<input  class='champs' id='ChampsOnglet_AgenceClientRaisonSociale' name='AgenceClientRaisonSociale' autocomplete='off' value="" type='text' style='width:214.5px;border-width:0px; '  onBlur="javascript:appliqueFormules('AgenceClientRaisonSociale', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
<td id='cellule_attr_AgenceClientId' data-tableau='Onglet1TableNumero44' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_AgenceClientId' style='border:1px solid #646464;  ' onMouseOver="javascript:changeZindexManuel('Onglet1TableNumero44', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet1TableNumero44', '');" onDblClick="javascript:RechOuvertureDist('UP_AgencesClients', 'Id', 'AgenceClientId', 'AgenceClientId');">
<input  class='champs' id='ChampsOnglet_AgenceClientId' name='AgenceClientId' autocomplete='off' value="" type='text' style='width:32.5px;border-width:0px; '  onBlur="javascript:appliqueFormules('AgenceClientId', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
<input id='ChampsOnglet_AgenceClientAdresse1' name='AgenceClientAdresse1' value="" type='hidden'>
<input id='ChampsOnglet_AgenceClientAdresse2' name='AgenceClientAdresse2' value="" type='hidden'>
<input id='ChampsOnglet_AgenceClientCP' name='AgenceClientCP' value="" type='hidden'>
<input id='ChampsOnglet_AgenceClientVille' name='AgenceClientVille' value="" type='hidden'>
<input id='ChampsOnglet_AgenceClientTel' name='AgenceClientTel' value="" type='hidden'>
<input id='ChampsOnglet_AgenceClientTeP' name='AgenceClientTeP' value="" type='hidden'>
</table></td></tr>
</table>
<table id='Onglet1TableNumero45' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:449.33333333333px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet1TableNumero45SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_AgenceClientCResponsable' class='CelLib' style='width:628.33px;'>
Resp. UP Agence
</td>
<td id='cellule_attr_AgenceClientCResponsable' data-tableau='Onglet1TableNumero45' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_AgenceClientCResponsable' style='border:1px solid #646464;  ' onMouseOver="javascript:changeZindexManuel('Onglet1TableNumero45', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet1TableNumero45', '');">
<input class='champs' autocomplete='off' id='ChampsOnglet_AgenceClientCResponsable' name='AgenceClientCResponsable' value="" type='text' style=' width:100px;border-width:0px; '  onBlur="javascript:appliqueFormules('AgenceClientCResponsable', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"><img id='Image_AgenceClientCResponsable' src='images/2016/bouton_bas.png' alt='' class='BoutDico' onClick="javascript:nePasChangerZindex('Onglet1TableNumero45', 'menu'); afficheCacheMenuDeroulant('listeAgenceClientCResponsable', 'ChampsOnglet_AgenceClientCResponsable', 'Onglet1TableNumero45');" onMouseDown="javascript:this.src='images/2016/bouton_bas_click.png';" onMouseUp="javascript:this.src='images/2016/bouton_bas.png';">
</div>
<div id='listeAgenceClientCResponsable' style=' overflow-y:auto;overflow-x:hidden;position:fixed;display:none;z-index:5000;border:1px solid #C1C1C1;min-width:113px;background-color:#ffffff;padding:2;' onMouseOver="javascript:cacherMenuDeroulant = false;" onMouseOut="javascript:cacherMenuDeroulant = true;">
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_AgenceClientCResponsable', '', 'listeAgenceClientCResponsable');appliqueFormules('AgenceClientCResponsable', '116');"><nobr>&nbsp;</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_AgenceClientCResponsable', 'Berthier Fabien', 'listeAgenceClientCResponsable');appliqueFormules('AgenceClientCResponsable', '116');"><nobr>Berthier Fabien</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_AgenceClientCResponsable', 'CANCELA', 'listeAgenceClientCResponsable');appliqueFormules('AgenceClientCResponsable', '116');"><nobr>CANCELA</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_AgenceClientCResponsable', 'CONDAMINES Caroline', 'listeAgenceClientCResponsable');appliqueFormules('AgenceClientCResponsable', '116');"><nobr>CONDAMINES Caroline</nobr></div>
</div>
</td>
<input id='ChampsOnglet_AgenceClientCPrefixe' name='AgenceClientCPrefixe' value="" type='hidden'>
<input id='ChampsOnglet_AgenceClientSigle' name='AgenceClientSigle' value="" type='hidden'>
<input id='ChampsOnglet_AgenceClientEmail' name='AgenceClientEmail' value="" type='hidden'>
</table></td></tr>
</table>
<table id='Onglet1TableNumero46' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:476px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet1TableNumero46SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_AgenceClientComment' class='CelLib' style='width:628.33px;'>
Commentaire
</td>
<td id='cellule_attr_AgenceClientComment' data-tableau='Onglet1TableNumero46' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_AgenceClientComment' style=' border:1px solid #646464;  ' onMouseOver="javascript:changeZindexManuel('Onglet1TableNumero46', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet1TableNumero46', '');">
<textarea class='champs' id='ChampsOnglet_AgenceClientComment' data-type='TEXT2' name='AgenceClientComment' style='width:195px; height:60px; border-width:0px; '  onBlur="javascript:appliqueFormules('AgenceClientComment', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;">
</textarea>
</div>
</td>
</table></td></tr>
</table>
<table id='Onglet1TableNumero47' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:547.66666666667px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet1TableNumero47SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_AgenceClientAccordCadre' class='CelLib' style='width:628.33px;'>
Acc. Cadre
</td>
<td id='cellule_attr_AgenceClientAccordCadre' data-tableau='Onglet1TableNumero47' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_AgenceClientAccordCadre' style='border:1px solid #646464;  ' onMouseOver="javascript:changeZindexManuel('Onglet1TableNumero47', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet1TableNumero47', '');" >
<input  class='champs' id='ChampsOnglet_AgenceClientAccordCadre' name='AgenceClientAccordCadre' autocomplete='off' value="" type='text' style='width:136.5px;border-width:0px; '  onBlur="javascript:appliqueFormules('AgenceClientAccordCadre', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
</table></td></tr>
</table>
<table id='Onglet1TableNumero48' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:574.33333333333px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet1TableNumero48SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_AgenceClientRedevanceCom' class='CelLib' style='width:628.33px;'>
Red. comm.
</td>
<td id='cellule_attr_AgenceClientRedevanceCom' data-tableau='Onglet1TableNumero48' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_AgenceClientRedevanceCom' style='border:1px solid #646464;  ' onMouseOver="javascript:changeZindexManuel('Onglet1TableNumero48', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet1TableNumero48', '');">
<input class='champs' autocomplete='off' id='ChampsOnglet_AgenceClientRedevanceCom' name='AgenceClientRedevanceCom' value="0" type='text' style='width:39px;border-width:0px; text-align:right; '  onBlur="javascript:appliqueFormules('AgenceClientRedevanceCom', '116');" onKeyDown="javascript:onKeyDownNumerique(this);" onKeyUp="javascript:onKeyUpNumerique(this);" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
<td id='cellule_unite_AgenceClientRedevanceCom' class='CelUnite' style='width:7px;'>
<nobr>%</nobr>
</td>
</table></td></tr>
</table>
<table id='Onglet1TableNumero49' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:409.33333333333px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet1TableNumero49SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_leg_coord_gest_agence_client' class='CelLib' style='width:928.33px;'>

</td>
<td id='cellule_attr_leg_coord_gest_agence_client' data-tableau='Onglet1TableNumero49' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_leg_coord_gest_agence_client' style='border:1px solid transparent; background-color:transparent; overflow:hidden; height:16px;   cursor:default;' onMouseOver="javascript:changeZindexManuel('Onglet1TableNumero49', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet1TableNumero49', '');" >
<div id='div_champs_non_modif_leg_coord_gest_agence_client' style='width:195px;'></div>
</div>
</td>
<td id='cellule_lib_ForcerCreationAgenceClientGest' class='CelLib' style='padding-left:10px; width:130px;'>
Nouveau gestionnaire ?
</td>
<td id='cellule_attr_ForcerCreationAgenceClientGest' data-tableau='Onglet1TableNumero49' style='vertical-align:top;'>
<input id='Checkbox_ForcerCreationAgenceClientGest'  type='checkbox'  onClick="javascript:ClickCheckboxChamp('ForcerCreationAgenceClientGest', '116');"><input id='ChampsOnglet_ForcerCreationAgenceClientGest' name='ForcerCreationAgenceClientGest' autocomplete='off' value="" type='hidden'></td>
</table></td></tr>
</table>
<table id='Onglet1TableNumero50' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:436px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet1TableNumero50SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_AgenceClientGestNomPrenom' class='CelLib' style='width:928.33px;'>
Nom
</td>
<td id='cellule_attr_AgenceClientGestNomPrenom' data-tableau='Onglet1TableNumero50' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_AgenceClientGestNomPrenom' style='border:1px solid #646464;  ' onMouseOver="javascript:changeZindexManuel('Onglet1TableNumero50', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet1TableNumero50', '');" >
<input  class='champs' id='ChampsOnglet_AgenceClientGestNomPrenom' name='AgenceClientGestNomPrenom' autocomplete='off' value="" type='text' style='width:214.5px;border-width:0px; '  onBlur="javascript:appliqueFormules('AgenceClientGestNomPrenom', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
<td id='cellule_bouton_AgenceClientGestNomPrenom' style='vertical-align:top;'>
<input type='button' data-ident='' value=""  style="background:#ffffff url('images/icone_Dico.jpg') no-repeat top left; height:19px;  width:19px;  border-width:1px; cursor:pointer;" onClick="javascript:AfficheSuperDico('AgenceClientGestNomPrenom', 'ListeGestionnaireAgenceClientDiEzENoAgenceClient=AgenceClientId', 'NomPrenom>AgenceClientGestNomPrenom;Prefixe>AgenceClientGestPrefixe;Prenom>AgenceClientGestPrenom;Adresse1>AgenceClientGestAdresse1;Adresse2>AgenceClientGestAdresse2;CP>AgenceClientGestCP;Ville>AgenceClientGestVille;Tel>AgenceClientGestTel;TeP>AgenceClientGestTeP;Email>AgenceClientGestEmail', '', '', '', '', false, false); return false;"></td>
<td id='cellule_lib_AgenceClientGestPrefixe' class='CelLib' style='padding-left:10px; width:-2px;'>

</td>
<td id='cellule_attr_AgenceClientGestPrefixe' data-tableau='Onglet1TableNumero50' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_AgenceClientGestPrefixe' style='border:1px solid #646464;  ' onMouseOver="javascript:changeZindexManuel('Onglet1TableNumero50', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet1TableNumero50', '');">
<input class='champs' autocomplete='off' id='ChampsOnglet_AgenceClientGestPrefixe' name='AgenceClientGestPrefixe' value="" type='text' style=' width:35px;border-width:0px; '  onBlur="javascript:appliqueFormules('AgenceClientGestPrefixe', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"><img id='Image_AgenceClientGestPrefixe' src='images/2016/bouton_bas.png' alt='' class='BoutDico' onClick="javascript:nePasChangerZindex('Onglet1TableNumero50', 'menu'); afficheCacheMenuDeroulant('listeAgenceClientGestPrefixe', 'ChampsOnglet_AgenceClientGestPrefixe', 'Onglet1TableNumero50');" onMouseDown="javascript:this.src='images/2016/bouton_bas_click.png';" onMouseUp="javascript:this.src='images/2016/bouton_bas.png';">
</div>
<div id='listeAgenceClientGestPrefixe' style='height:110px; overflow-y:auto;overflow-x:hidden;position:fixed;display:none;z-index:5000;border:1px solid #C1C1C1;min-width:48px;background-color:#ffffff;padding:2;' onMouseOver="javascript:cacherMenuDeroulant = false;" onMouseOut="javascript:cacherMenuDeroulant = true;">
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_AgenceClientGestPrefixe', 'M.', 'listeAgenceClientGestPrefixe');appliqueFormules('AgenceClientGestPrefixe', '116');"><nobr>M.</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_AgenceClientGestPrefixe', 'Mme', 'listeAgenceClientGestPrefixe');appliqueFormules('AgenceClientGestPrefixe', '116');"><nobr>Mme</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_AgenceClientGestPrefixe', 'Melle', 'listeAgenceClientGestPrefixe');appliqueFormules('AgenceClientGestPrefixe', '116');"><nobr>Melle</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_AgenceClientGestPrefixe', 'M & Mme', 'listeAgenceClientGestPrefixe');appliqueFormules('AgenceClientGestPrefixe', '116');"><nobr>M & Mme</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_AgenceClientGestPrefixe', 'M & M', 'listeAgenceClientGestPrefixe');appliqueFormules('AgenceClientGestPrefixe', '116');"><nobr>M & M</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_AgenceClientGestPrefixe', 'Mme & Mme', 'listeAgenceClientGestPrefixe');appliqueFormules('AgenceClientGestPrefixe', '116');"><nobr>Mme & Mme</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_AgenceClientGestPrefixe', 'Melle & Melle', 'listeAgenceClientGestPrefixe');appliqueFormules('AgenceClientGestPrefixe', '116');"><nobr>Melle & Melle</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_AgenceClientGestPrefixe', 'SA', 'listeAgenceClientGestPrefixe');appliqueFormules('AgenceClientGestPrefixe', '116');"><nobr>SA</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_AgenceClientGestPrefixe', 'SARL', 'listeAgenceClientGestPrefixe');appliqueFormules('AgenceClientGestPrefixe', '116');"><nobr>SARL</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_AgenceClientGestPrefixe', 'SAS', 'listeAgenceClientGestPrefixe');appliqueFormules('AgenceClientGestPrefixe', '116');"><nobr>SAS</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_AgenceClientGestPrefixe', 'EURL', 'listeAgenceClientGestPrefixe');appliqueFormules('AgenceClientGestPrefixe', '116');"><nobr>EURL</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_AgenceClientGestPrefixe', 'Société', 'listeAgenceClientGestPrefixe');appliqueFormules('AgenceClientGestPrefixe', '116');"><nobr>Société</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_AgenceClientGestPrefixe', 'Entreprise', 'listeAgenceClientGestPrefixe');appliqueFormules('AgenceClientGestPrefixe', '116');"><nobr>Entreprise</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_AgenceClientGestPrefixe', 'Etablissement', 'listeAgenceClientGestPrefixe');appliqueFormules('AgenceClientGestPrefixe', '116');"><nobr>Etablissement</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_AgenceClientGestPrefixe', 'Administration', 'listeAgenceClientGestPrefixe');appliqueFormules('AgenceClientGestPrefixe', '116');"><nobr>Administration</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_AgenceClientGestPrefixe', 'Cabinet', 'listeAgenceClientGestPrefixe');appliqueFormules('AgenceClientGestPrefixe', '116');"><nobr>Cabinet</nobr></div>
</div>
</td>
<input id='ChampsOnglet_AgenceClientGestPrenom' name='AgenceClientGestPrenom' value="" type='hidden'>
</table></td></tr>
</table>
<table id='Onglet1TableNumero51' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:462.66666666667px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet1TableNumero51SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_AgenceClientGestAdresse1' class='CelLib' style='width:928.33px;'>
Adresse
</td>
<td id='cellule_attr_AgenceClientGestAdresse1' data-tableau='Onglet1TableNumero51' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_AgenceClientGestAdresse1' style='border:1px solid #646464;  ' onMouseOver="javascript:changeZindexManuel('Onglet1TableNumero51', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet1TableNumero51', '');" >
<input  class='champs' id='ChampsOnglet_AgenceClientGestAdresse1' name='AgenceClientGestAdresse1' autocomplete='off' value="" type='text' style='width:214.5px;border-width:0px; '  onBlur="javascript:appliqueFormules('AgenceClientGestAdresse1', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
</table></td></tr>
</table>
<table id='Onglet1TableNumero52' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:489.33333333333px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet1TableNumero52SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_AgenceClientGestAdresse2' class='CelLib' style='width:928.33px;'>

</td>
<td id='cellule_attr_AgenceClientGestAdresse2' data-tableau='Onglet1TableNumero52' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_AgenceClientGestAdresse2' style='border:1px solid #646464;  ' onMouseOver="javascript:changeZindexManuel('Onglet1TableNumero52', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet1TableNumero52', '');" >
<input  class='champs' id='ChampsOnglet_AgenceClientGestAdresse2' name='AgenceClientGestAdresse2' autocomplete='off' value="" type='text' style='width:214.5px;border-width:0px; '  onBlur="javascript:appliqueFormules('AgenceClientGestAdresse2', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
</table></td></tr>
</table>
<table id='Onglet1TableNumero53' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:516px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet1TableNumero53SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_AgenceClientGestCP' class='CelLib' style='width:928.33px;'>
CP
</td>
<td id='cellule_attr_AgenceClientGestCP' data-tableau='Onglet1TableNumero53' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_AgenceClientGestCP' style='border:1px solid #646464;  ' onMouseOver="javascript:changeZindexManuel('Onglet1TableNumero53', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet1TableNumero53', '');" >
<input  class='champs' id='ChampsOnglet_AgenceClientGestCP' name='AgenceClientGestCP' autocomplete='off' value="" type='text' style='width:52px;border-width:0px; '  onBlur="javascript:appliqueFormules('AgenceClientGestCP', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
<td id='cellule_attr_AgenceClientGestVille' data-tableau='Onglet1TableNumero53' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_AgenceClientGestVille' style='border:1px solid #646464;  ' onMouseOver="javascript:changeZindexManuel('Onglet1TableNumero53', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet1TableNumero53', '');" >
<input  class='champs' id='ChampsOnglet_AgenceClientGestVille' name='AgenceClientGestVille' autocomplete='off' value="" type='text' style='width:130px;border-width:0px; '  onBlur="javascript:appliqueFormules('AgenceClientGestVille', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
</table></td></tr>
</table>
<table id='Onglet1TableNumero54' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:542.66666666667px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet1TableNumero54SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_AgenceClientGestTel' class='CelLib' style='width:928.33px;'>
Tél.
</td>
<td id='cellule_attr_AgenceClientGestTel' data-tableau='Onglet1TableNumero54' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_AgenceClientGestTel' style='border:1px solid #646464;  ' onMouseOver="javascript:changeZindexManuel('Onglet1TableNumero54', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet1TableNumero54', '');" >
<input  class='champs' id='ChampsOnglet_AgenceClientGestTel' name='AgenceClientGestTel' autocomplete='off' value="" type='text' style='width:97.5px;border-width:0px; '  onBlur="javascript:appliqueFormules('AgenceClientGestTel', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
<td id='cellule_lib_AgenceClientGestTeP' class='CelLib' style='padding-left:10px; width:-114.5px;'>
Tél.P
</td>
<td id='cellule_attr_AgenceClientGestTeP' data-tableau='Onglet1TableNumero54' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_AgenceClientGestTeP' style='border:1px solid #646464;  ' onMouseOver="javascript:changeZindexManuel('Onglet1TableNumero54', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet1TableNumero54', '');" >
<input  class='champs' id='ChampsOnglet_AgenceClientGestTeP' name='AgenceClientGestTeP' autocomplete='off' value="" type='text' style='width:97.5px;border-width:0px; '  onBlur="javascript:appliqueFormules('AgenceClientGestTeP', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
</table></td></tr>
</table>
<table id='Onglet1TableNumero55' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:569.33333333333px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet1TableNumero55SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_AgenceClientGestEmail' class='CelLib' style='width:928.33px;'>
Email
</td>
<td id='cellule_attr_AgenceClientGestEmail' data-tableau='Onglet1TableNumero55' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_AgenceClientGestEmail' style='border:1px solid #646464;  ' onMouseOver="javascript:changeZindexManuel('Onglet1TableNumero55', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet1TableNumero55', '');" >
<input  class='champs' id='ChampsOnglet_AgenceClientGestEmail' name='AgenceClientGestEmail' autocomplete='off' value="" type='text' style='width:214.5px;border-width:0px; '  onBlur="javascript:appliqueFormules('AgenceClientGestEmail', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
<td id='cellule_lib_BoutCreerAgenceClientGest' class='CelLib' style='padding-left:10px; width:-2px;'>

</td>
<td id='cellule_bouton_BoutCreerAgenceClientGest' style='vertical-align:top;'>
<input type='button' data-ident='' value="Créer gestionnaire"  style="" onClick="javascript:ClickBoutonGeneInstance('ListeGestionnaireAgenceClient', 'AgenceClientId>NoAgenceClient;AgenceClientRaisonSociale>AgenceClient;AgenceClientGestNomPrenom>NomPrenom;AgenceClientGestPrefixe>Prefixe;AgenceClientGestPrenom>Prenom;AgenceClientGestAdresse1>Adresse1;AgenceClientGestAdresse2>Adresse2;AgenceClientGestCP>CP;AgenceClientGestVille>Ville;AgenceClientGestTel>Tel;AgenceClientGestTeP>TeP;AgenceClientGestEmail>Email', '', '', 'Gestionnaires Agence Client', '', '', '', '', false); return false;"></td>
</table></td></tr>
</table>
<table id='Onglet1TableNumero56' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:596px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet1TableNumero56SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_leg_coord_gardien_agence_client' class='CelLib' style='width:928.33px;'>

</td>
<td id='cellule_attr_leg_coord_gardien_agence_client' data-tableau='Onglet1TableNumero56' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_leg_coord_gardien_agence_client' style='border:1px solid transparent; background-color:transparent; overflow:hidden; height:16px;   cursor:default;' onMouseOver="javascript:changeZindexManuel('Onglet1TableNumero56', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet1TableNumero56', '');" >
<div id='div_champs_non_modif_leg_coord_gardien_agence_client' style='width:195px;'></div>
</div>
</td>
<td id='cellule_lib_ForcerCreationAgenceClientGard' class='CelLib' style='padding-left:10px; width:100px;'>
Nouveau gardien ?
</td>
<td id='cellule_attr_ForcerCreationAgenceClientGard' data-tableau='Onglet1TableNumero56' style='vertical-align:top;'>
<input id='Checkbox_ForcerCreationAgenceClientGard'  type='checkbox'  onClick="javascript:ClickCheckboxChamp('ForcerCreationAgenceClientGard', '116');"><input id='ChampsOnglet_ForcerCreationAgenceClientGard' name='ForcerCreationAgenceClientGard' autocomplete='off' value="" type='hidden'></td>
</table></td></tr>
</table>
<table id='Onglet1TableNumero57' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:622.66666666667px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet1TableNumero57SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_AgenceClientGardNomPrenom' class='CelLib' style='width:928.33px;'>
Nom gardien
</td>
<td id='cellule_attr_AgenceClientGardNomPrenom' data-tableau='Onglet1TableNumero57' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_AgenceClientGardNomPrenom' style='border:1px solid #646464;  ' onMouseOver="javascript:changeZindexManuel('Onglet1TableNumero57', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet1TableNumero57', '');" >
<input  class='champs' id='ChampsOnglet_AgenceClientGardNomPrenom' name='AgenceClientGardNomPrenom' autocomplete='off' value="" type='text' style='width:214.5px;border-width:0px; '  onBlur="javascript:appliqueFormules('AgenceClientGardNomPrenom', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
<td id='cellule_bouton_AgenceClientGardNomPrenom' style='vertical-align:top;'>
<input type='button' data-ident='' value=""  style="background:#ffffff url('images/icone_Dico.jpg') no-repeat top left; height:19px;  width:19px;  border-width:1px; cursor:pointer;" onClick="javascript:AfficheSuperDico('AgenceClientGardNomPrenom', 'ListeGardienAgenceClientDiEzENoAgenceClient=AgenceClientId', 'NomPrenom>AgenceClientGardNomPrenom;Prefixe>AgenceClientGardPrefixe;Prenom>AgenceClientGardPrenom;Adresse1>AgenceClientGardAdresse1;Adresse2>AgenceClientGardAdresse2;CP>AgenceClientGardCP;Ville>AgenceClientGardVille;Tel>AgenceClientGardTel;TeP>AgenceClientGardTeP;Email>AgenceClientGardEmail', '', '', '', '', false, false); return false;"></td>
<td id='cellule_lib_AgenceClientGardPrefixe' class='CelLib' style='padding-left:10px; width:-2px;'>

</td>
<td id='cellule_attr_AgenceClientGardPrefixe' data-tableau='Onglet1TableNumero57' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_AgenceClientGardPrefixe' style='border:1px solid #646464;  ' onMouseOver="javascript:changeZindexManuel('Onglet1TableNumero57', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet1TableNumero57', '');">
<input class='champs' autocomplete='off' id='ChampsOnglet_AgenceClientGardPrefixe' name='AgenceClientGardPrefixe' value="" type='text' style=' width:35px;border-width:0px; '  onBlur="javascript:appliqueFormules('AgenceClientGardPrefixe', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"><img id='Image_AgenceClientGardPrefixe' src='images/2016/bouton_bas.png' alt='' class='BoutDico' onClick="javascript:nePasChangerZindex('Onglet1TableNumero57', 'menu'); afficheCacheMenuDeroulant('listeAgenceClientGardPrefixe', 'ChampsOnglet_AgenceClientGardPrefixe', 'Onglet1TableNumero57');" onMouseDown="javascript:this.src='images/2016/bouton_bas_click.png';" onMouseUp="javascript:this.src='images/2016/bouton_bas.png';">
</div>
<div id='listeAgenceClientGardPrefixe' style='height:110px; overflow-y:auto;overflow-x:hidden;position:fixed;display:none;z-index:5000;border:1px solid #C1C1C1;min-width:48px;background-color:#ffffff;padding:2;' onMouseOver="javascript:cacherMenuDeroulant = false;" onMouseOut="javascript:cacherMenuDeroulant = true;">
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_AgenceClientGardPrefixe', 'M.', 'listeAgenceClientGardPrefixe');appliqueFormules('AgenceClientGardPrefixe', '116');"><nobr>M.</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_AgenceClientGardPrefixe', 'Mme', 'listeAgenceClientGardPrefixe');appliqueFormules('AgenceClientGardPrefixe', '116');"><nobr>Mme</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_AgenceClientGardPrefixe', 'Melle', 'listeAgenceClientGardPrefixe');appliqueFormules('AgenceClientGardPrefixe', '116');"><nobr>Melle</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_AgenceClientGardPrefixe', 'M & Mme', 'listeAgenceClientGardPrefixe');appliqueFormules('AgenceClientGardPrefixe', '116');"><nobr>M & Mme</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_AgenceClientGardPrefixe', 'M & M', 'listeAgenceClientGardPrefixe');appliqueFormules('AgenceClientGardPrefixe', '116');"><nobr>M & M</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_AgenceClientGardPrefixe', 'Mme & Mme', 'listeAgenceClientGardPrefixe');appliqueFormules('AgenceClientGardPrefixe', '116');"><nobr>Mme & Mme</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_AgenceClientGardPrefixe', 'Melle & Melle', 'listeAgenceClientGardPrefixe');appliqueFormules('AgenceClientGardPrefixe', '116');"><nobr>Melle & Melle</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_AgenceClientGardPrefixe', 'SA', 'listeAgenceClientGardPrefixe');appliqueFormules('AgenceClientGardPrefixe', '116');"><nobr>SA</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_AgenceClientGardPrefixe', 'SARL', 'listeAgenceClientGardPrefixe');appliqueFormules('AgenceClientGardPrefixe', '116');"><nobr>SARL</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_AgenceClientGardPrefixe', 'SAS', 'listeAgenceClientGardPrefixe');appliqueFormules('AgenceClientGardPrefixe', '116');"><nobr>SAS</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_AgenceClientGardPrefixe', 'EURL', 'listeAgenceClientGardPrefixe');appliqueFormules('AgenceClientGardPrefixe', '116');"><nobr>EURL</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_AgenceClientGardPrefixe', 'Société', 'listeAgenceClientGardPrefixe');appliqueFormules('AgenceClientGardPrefixe', '116');"><nobr>Société</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_AgenceClientGardPrefixe', 'Entreprise', 'listeAgenceClientGardPrefixe');appliqueFormules('AgenceClientGardPrefixe', '116');"><nobr>Entreprise</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_AgenceClientGardPrefixe', 'Etablissement', 'listeAgenceClientGardPrefixe');appliqueFormules('AgenceClientGardPrefixe', '116');"><nobr>Etablissement</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_AgenceClientGardPrefixe', 'Administration', 'listeAgenceClientGardPrefixe');appliqueFormules('AgenceClientGardPrefixe', '116');"><nobr>Administration</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_AgenceClientGardPrefixe', 'Cabinet', 'listeAgenceClientGardPrefixe');appliqueFormules('AgenceClientGardPrefixe', '116');"><nobr>Cabinet</nobr></div>
</div>
</td>
<input id='ChampsOnglet_AgenceClientGardPrenom' name='AgenceClientGardPrenom' value="" type='hidden'>
</table></td></tr>
</table>
<table id='Onglet1TableNumero58' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:649.33333333333px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet1TableNumero58SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_AgenceClientGardAdresse1' class='CelLib' style='width:928.33px;'>
Adresse
</td>
<td id='cellule_attr_AgenceClientGardAdresse1' data-tableau='Onglet1TableNumero58' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_AgenceClientGardAdresse1' style='border:1px solid #646464;  ' onMouseOver="javascript:changeZindexManuel('Onglet1TableNumero58', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet1TableNumero58', '');" >
<input  class='champs' id='ChampsOnglet_AgenceClientGardAdresse1' name='AgenceClientGardAdresse1' autocomplete='off' value="" type='text' style='width:214.5px;border-width:0px; '  onBlur="javascript:appliqueFormules('AgenceClientGardAdresse1', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
</table></td></tr>
</table>
<table id='Onglet1TableNumero59' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:676px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet1TableNumero59SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_AgenceClientGardAdresse2' class='CelLib' style='width:928.33px;'>

</td>
<td id='cellule_attr_AgenceClientGardAdresse2' data-tableau='Onglet1TableNumero59' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_AgenceClientGardAdresse2' style='border:1px solid #646464;  ' onMouseOver="javascript:changeZindexManuel('Onglet1TableNumero59', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet1TableNumero59', '');" >
<input  class='champs' id='ChampsOnglet_AgenceClientGardAdresse2' name='AgenceClientGardAdresse2' autocomplete='off' value="" type='text' style='width:214.5px;border-width:0px; '  onBlur="javascript:appliqueFormules('AgenceClientGardAdresse2', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
</table></td></tr>
</table>
<table id='Onglet1TableNumero60' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:702.66666666667px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet1TableNumero60SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_AgenceClientGardCP' class='CelLib' style='width:928.33px;'>
CP
</td>
<td id='cellule_attr_AgenceClientGardCP' data-tableau='Onglet1TableNumero60' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_AgenceClientGardCP' style='border:1px solid #646464;  ' onMouseOver="javascript:changeZindexManuel('Onglet1TableNumero60', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet1TableNumero60', '');" >
<input  class='champs' id='ChampsOnglet_AgenceClientGardCP' name='AgenceClientGardCP' autocomplete='off' value="" type='text' style='width:52px;border-width:0px; '  onBlur="javascript:appliqueFormules('AgenceClientGardCP', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
<td id='cellule_attr_AgenceClientGardVille' data-tableau='Onglet1TableNumero60' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_AgenceClientGardVille' style='border:1px solid #646464;  ' onMouseOver="javascript:changeZindexManuel('Onglet1TableNumero60', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet1TableNumero60', '');" >
<input  class='champs' id='ChampsOnglet_AgenceClientGardVille' name='AgenceClientGardVille' autocomplete='off' value="" type='text' style='width:130px;border-width:0px; '  onBlur="javascript:appliqueFormules('AgenceClientGardVille', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
</table></td></tr>
</table>
<table id='Onglet1TableNumero61' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:729.33333333333px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet1TableNumero61SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_AgenceClientGardTel' class='CelLib' style='width:928.33px;'>
Tél.
</td>
<td id='cellule_attr_AgenceClientGardTel' data-tableau='Onglet1TableNumero61' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_AgenceClientGardTel' style='border:1px solid #646464;  ' onMouseOver="javascript:changeZindexManuel('Onglet1TableNumero61', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet1TableNumero61', '');" >
<input  class='champs' id='ChampsOnglet_AgenceClientGardTel' name='AgenceClientGardTel' autocomplete='off' value="" type='text' style='width:97.5px;border-width:0px; '  onBlur="javascript:appliqueFormules('AgenceClientGardTel', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
<td id='cellule_lib_AgenceClientGardTeP' class='CelLib' style='padding-left:10px; width:-114.5px;'>
Tél.P
</td>
<td id='cellule_attr_AgenceClientGardTeP' data-tableau='Onglet1TableNumero61' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_AgenceClientGardTeP' style='border:1px solid #646464;  ' onMouseOver="javascript:changeZindexManuel('Onglet1TableNumero61', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet1TableNumero61', '');" >
<input  class='champs' id='ChampsOnglet_AgenceClientGardTeP' name='AgenceClientGardTeP' autocomplete='off' value="" type='text' style='width:97.5px;border-width:0px; '  onBlur="javascript:appliqueFormules('AgenceClientGardTeP', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
</table></td></tr>
</table>
<table id='Onglet1TableNumero62' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:756px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet1TableNumero62SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_AgenceClientGardEmail' class='CelLib' style='width:928.33px;'>
Email
</td>
<td id='cellule_attr_AgenceClientGardEmail' data-tableau='Onglet1TableNumero62' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_AgenceClientGardEmail' style='border:1px solid #646464;  ' onMouseOver="javascript:changeZindexManuel('Onglet1TableNumero62', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet1TableNumero62', '');" >
<input  class='champs' id='ChampsOnglet_AgenceClientGardEmail' name='AgenceClientGardEmail' autocomplete='off' value="" type='text' style='width:214.5px;border-width:0px; '  onBlur="javascript:appliqueFormules('AgenceClientGardEmail', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
<td id='cellule_lib_BoutCreerAgenceClientGard' class='CelLib' style='padding-left:10px; width:-2px;'>

</td>
<td id='cellule_bouton_BoutCreerAgenceClientGard' style='vertical-align:top;'>
<input type='button' data-ident='' value="Créer gardien"  style="" onClick="javascript:ClickBoutonGeneInstance('ListeGardienAgenceClient', 'AgenceClientId>NoAgenceClient;AgenceClientRaisonSociale>AgenceClient;AgenceClientGardNomPrenom>NomPrenom;AgenceClientGardPrefixe>Prefixe;AgenceClientGardPrenom>Prenom;AgenceClientGardAdresse1>Adresse1;AgenceClientGardAdresse2>Adresse2;AgenceClientGardCP>CP;AgenceClientGardVille>Ville;AgenceClientGardTel>Tel;AgenceClientGardTeP>TeP;AgenceClientGardEmail>Email', '', '', 'Gardiens Agence Client', '', '', '', '', false); return false;"></td>
</table></td></tr>
</table>
</div>
<div id='div_Intervenants' class='fond_interface_elmt' style='position:relative; display:none; overflow:none; width:1311.33px;  height:855.66666666667px; '>
<table id='Onglet2TableNumero1' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:19.333333333333px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;' id='table_etiquette_leg_coord_assurance'>
<td style='padding-right:5px;  width:115px;'>
</td>
<td style='padding-bottom:10px;'>
<div class='etiquette' style='color:#FFFFFF;  width:140px; '>
<nobr>Assurance</nobr>
</div>
</td>
</table>
</td>
</tr>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet2TableNumero1SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_leg_coord_assurance' class='CelLib' style='width:115px;'>

</td>
<td id='cellule_attr_leg_coord_assurance' data-tableau='Onglet2TableNumero1' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_leg_coord_assurance' style='border:1px solid transparent; background-color:transparent; overflow:hidden; height:16px;   cursor:default;' onMouseOver="javascript:changeZindexManuel('Onglet2TableNumero1', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet2TableNumero1', '');" >
<div id='div_champs_non_modif_leg_coord_assurance' style='width:195px;'></div>
</div>
</td>
</table></td></tr>
</table>
<table id='Onglet2TableNumero2' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:86px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet2TableNumero2SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_AssurNomPrenom' class='CelLib' style='width:115px;'>
Nom Assurance
</td>
<td id='cellule_attr_AssurNomPrenom' data-tableau='Onglet2TableNumero2' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_AssurNomPrenom' style='border:1px solid #646464;  ' onMouseOver="javascript:changeZindexManuel('Onglet2TableNumero2', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet2TableNumero2', '');" >
<input  class='champs' id='ChampsOnglet_AssurNomPrenom' name='AssurNomPrenom' autocomplete='off' value="" type='text' style='width:214.5px;border-width:0px; '  onBlur="javascript:appliqueFormules('AssurNomPrenom', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
<td id='cellule_attr_AssurId' data-tableau='Onglet2TableNumero2' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_AssurId' style='border:1px solid #646464;  ' onMouseOver="javascript:changeZindexManuel('Onglet2TableNumero2', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet2TableNumero2', '');" onDblClick="javascript:RechOuvertureDist('UP_Assureurs', 'Id', 'AssurId', 'AssurId');">
<input  class='champs' id='ChampsOnglet_AssurId' name='AssurId' autocomplete='off' value="" type='text' style='width:32.5px;border-width:0px; '  onBlur="javascript:appliqueFormules('AssurId', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
<td id='cellule_bouton_AssurId' style='vertical-align:top;'>
<input type='button' data-ident='' value=""  style="background:#ffffff url('images/icone_Dico.jpg') no-repeat top left; height:19px;  width:19px;  border-width:1px; cursor:pointer;" onClick="javascript:AfficheSuperDico('AssurId', 'UP_Assureurs', 'Id>AssurId;NomPrenom>AssurNomPrenom;Contact>AssurContact;Prefixe>AssurPrefixe;Prenom>AssurPrenom;Adresse1>AssurAdresse1;Adresse2>AssurAdresse2;Adresse3>AssurAdresse3;CP>AssurCP;Ville>AssurVille;Tel>AssurTel;TeP>AssurTeP;DeuxTelephone>AssurDeuxTelephone;Fax>AssurFax;Email>AssurEmail;DeuxEmail>AssurDeuxEmail;SiteInt>AssurSiteInt;AccordCadre>AssurAccordCadre;CResponsable>AssurCResponsable;CPrefixe>AssurCPrefixe;Sigle>AssurSigle', '', '', '', '', false, false); return false;"><input type='button' data-ident='' value=""  style="background:#ffffff url('images/icone_chercher.gif') no-repeat top left; height:19px;  width:19px;  border-width:1px; cursor:pointer;" onClick="javascript:AfficheSuperDicoRechercher('UP_Assureurs', 'Id>AssurId;NomPrenom>AssurNomPrenom;Contact>AssurContact;Prefixe>AssurPrefixe;Prenom>AssurPrenom;Adresse1>AssurAdresse1;Adresse2>AssurAdresse2;Adresse3>AssurAdresse3;CP>AssurCP;Ville>AssurVille;Tel>AssurTel;TeP>AssurTeP;DeuxTelephone>AssurDeuxTelephone;Fax>AssurFax;Email>AssurEmail;DeuxEmail>AssurDeuxEmail;SiteInt>AssurSiteInt;AccordCadre>AssurAccordCadre;CResponsable>AssurCResponsable;CPrefixe>AssurCPrefixe;Sigle>AssurSigle;Note>AssurComment', 'NomPrenom', 'Rechercher un texte dans les noms des assureurs', '', '', 'AssurNomPrenom', false, 'AssurId'); return false;"></td>
</table></td></tr>
</table>
<table id='Onglet2TableNumero3' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:112.66666666667px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet2TableNumero3SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_AssurContact' class='CelLib' style='width:115px;'>
Gestionnaire Cie / Mut
</td>
<td id='cellule_attr_AssurContact' data-tableau='Onglet2TableNumero3' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_AssurContact' style='border:1px solid #646464;  ' onMouseOver="javascript:changeZindexManuel('Onglet2TableNumero3', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet2TableNumero3', '');" >
<input  class='champs' id='ChampsOnglet_AssurContact' name='AssurContact' autocomplete='off' value="" type='text' style='width:214.5px;border-width:0px; '  onBlur="javascript:appliqueFormules('AssurContact', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
<td id='cellule_lib_AssurPrefixe' class='CelLib' style='padding-left:10px; width:-2px;'>

</td>
<td id='cellule_attr_AssurPrefixe' data-tableau='Onglet2TableNumero3' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_AssurPrefixe' style='border:1px solid #646464;  ' onMouseOver="javascript:changeZindexManuel('Onglet2TableNumero3', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet2TableNumero3', '');">
<input class='champs' autocomplete='off' id='ChampsOnglet_AssurPrefixe' name='AssurPrefixe' value="" type='text' style=' width:35px;border-width:0px; '  onBlur="javascript:appliqueFormules('AssurPrefixe', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"><img id='Image_AssurPrefixe' src='images/2016/bouton_bas.png' alt='' class='BoutDico' onClick="javascript:nePasChangerZindex('Onglet2TableNumero3', 'menu'); afficheCacheMenuDeroulant('listeAssurPrefixe', 'ChampsOnglet_AssurPrefixe', 'Onglet2TableNumero3');" onMouseDown="javascript:this.src='images/2016/bouton_bas_click.png';" onMouseUp="javascript:this.src='images/2016/bouton_bas.png';">
</div>
<div id='listeAssurPrefixe' style='height:110px; overflow-y:auto;overflow-x:hidden;position:fixed;display:none;z-index:5000;border:1px solid #C1C1C1;min-width:48px;background-color:#ffffff;padding:2;' onMouseOver="javascript:cacherMenuDeroulant = false;" onMouseOut="javascript:cacherMenuDeroulant = true;">
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_AssurPrefixe', 'M.', 'listeAssurPrefixe');appliqueFormules('AssurPrefixe', '116');"><nobr>M.</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_AssurPrefixe', 'Mme', 'listeAssurPrefixe');appliqueFormules('AssurPrefixe', '116');"><nobr>Mme</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_AssurPrefixe', 'Melle', 'listeAssurPrefixe');appliqueFormules('AssurPrefixe', '116');"><nobr>Melle</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_AssurPrefixe', 'M & Mme', 'listeAssurPrefixe');appliqueFormules('AssurPrefixe', '116');"><nobr>M & Mme</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_AssurPrefixe', 'M & M', 'listeAssurPrefixe');appliqueFormules('AssurPrefixe', '116');"><nobr>M & M</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_AssurPrefixe', 'Mme & Mme', 'listeAssurPrefixe');appliqueFormules('AssurPrefixe', '116');"><nobr>Mme & Mme</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_AssurPrefixe', 'Melle & Melle', 'listeAssurPrefixe');appliqueFormules('AssurPrefixe', '116');"><nobr>Melle & Melle</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_AssurPrefixe', 'SA', 'listeAssurPrefixe');appliqueFormules('AssurPrefixe', '116');"><nobr>SA</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_AssurPrefixe', 'SARL', 'listeAssurPrefixe');appliqueFormules('AssurPrefixe', '116');"><nobr>SARL</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_AssurPrefixe', 'SAS', 'listeAssurPrefixe');appliqueFormules('AssurPrefixe', '116');"><nobr>SAS</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_AssurPrefixe', 'EURL', 'listeAssurPrefixe');appliqueFormules('AssurPrefixe', '116');"><nobr>EURL</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_AssurPrefixe', 'Société', 'listeAssurPrefixe');appliqueFormules('AssurPrefixe', '116');"><nobr>Société</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_AssurPrefixe', 'Entreprise', 'listeAssurPrefixe');appliqueFormules('AssurPrefixe', '116');"><nobr>Entreprise</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_AssurPrefixe', 'Etablissement', 'listeAssurPrefixe');appliqueFormules('AssurPrefixe', '116');"><nobr>Etablissement</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_AssurPrefixe', 'Administration', 'listeAssurPrefixe');appliqueFormules('AssurPrefixe', '116');"><nobr>Administration</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_AssurPrefixe', 'Cabinet', 'listeAssurPrefixe');appliqueFormules('AssurPrefixe', '116');"><nobr>Cabinet</nobr></div>
</div>
</td>
<input id='ChampsOnglet_AssurPrenom' name='AssurPrenom' value="" type='hidden'>
<input id='ChampsOnglet_AssurAdresse1' name='AssurAdresse1' value="" type='hidden'>
<input id='ChampsOnglet_AssurAdresse2' name='AssurAdresse2' value="" type='hidden'>
<input id='ChampsOnglet_AssurAdresse3' name='AssurAdresse3' value="" type='hidden'>
<input id='ChampsOnglet_AssurCP' name='AssurCP' value="" type='hidden'>
<input id='ChampsOnglet_AssurVille' name='AssurVille' value="" type='hidden'>
<input id='ChampsOnglet_AssurTel' name='AssurTel' value="" type='hidden'>
<input id='ChampsOnglet_AssurTeP' name='AssurTeP' value="" type='hidden'>
<input id='ChampsOnglet_AssurDeuxTelephone' name='AssurDeuxTelephone' value="" type='hidden'>
<input id='ChampsOnglet_AssurFax' name='AssurFax' value="" type='hidden'>
<input id='ChampsOnglet_AssurEmail' name='AssurEmail' value="" type='hidden'>
<input id='ChampsOnglet_AssurDeuxEmail' name='AssurDeuxEmail' value="" type='hidden'>
<input id='ChampsOnglet_AssurSiteInt' name='AssurSiteInt' value="" type='hidden'>
</table></td></tr>
</table>
<table id='Onglet2TableNumero4' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:139.33333333333px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet2TableNumero4SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_AssurComment' class='CelLib' style='width:115px;'>
Commentaire
</td>
<td id='cellule_attr_AssurComment' data-tableau='Onglet2TableNumero4' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_AssurComment' style=' border:1px solid #646464;  ' onMouseOver="javascript:changeZindexManuel('Onglet2TableNumero4', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet2TableNumero4', '');">
<textarea class='champs' id='ChampsOnglet_AssurComment' data-type='TEXT2' name='AssurComment' style='width:195px; height:60px; border-width:0px; '  onBlur="javascript:appliqueFormules('AssurComment', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;">
</textarea>
</div>
</td>
</table></td></tr>
</table>
<table id='Onglet2TableNumero5' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:211px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet2TableNumero5SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_AssurAccordCadre' class='CelLib' style='width:115px;'>
Accord Cadre
</td>
<td id='cellule_attr_AssurAccordCadre' data-tableau='Onglet2TableNumero5' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_AssurAccordCadre' style='border:1px solid #646464;  ' onMouseOver="javascript:changeZindexManuel('Onglet2TableNumero5', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet2TableNumero5', '');" >
<input  class='champs' id='ChampsOnglet_AssurAccordCadre' name='AssurAccordCadre' autocomplete='off' value="" type='text' style='width:136.5px;border-width:0px; '  onBlur="javascript:appliqueFormules('AssurAccordCadre', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
</table></td></tr>
</table>
<table id='Onglet2TableNumero6' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:237.66666666667px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet2TableNumero6SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_AssurCResponsable' class='CelLib' style='width:115px;'>
Resp. compte UP
</td>
<td id='cellule_attr_AssurCResponsable' data-tableau='Onglet2TableNumero6' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_AssurCResponsable' style='border:1px solid #646464;  ' onMouseOver="javascript:changeZindexManuel('Onglet2TableNumero6', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet2TableNumero6', '');">
<input class='champs' autocomplete='off' id='ChampsOnglet_AssurCResponsable' name='AssurCResponsable' value="" type='text' style=' width:100px;border-width:0px; '  onBlur="javascript:appliqueFormules('AssurCResponsable', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"><img id='Image_AssurCResponsable' src='images/2016/bouton_bas.png' alt='' class='BoutDico' onClick="javascript:nePasChangerZindex('Onglet2TableNumero6', 'menu'); afficheCacheMenuDeroulant('listeAssurCResponsable', 'ChampsOnglet_AssurCResponsable', 'Onglet2TableNumero6');" onMouseDown="javascript:this.src='images/2016/bouton_bas_click.png';" onMouseUp="javascript:this.src='images/2016/bouton_bas.png';">
</div>
<div id='listeAssurCResponsable' style=' overflow-y:auto;overflow-x:hidden;position:fixed;display:none;z-index:5000;border:1px solid #C1C1C1;min-width:113px;background-color:#ffffff;padding:2;' onMouseOver="javascript:cacherMenuDeroulant = false;" onMouseOut="javascript:cacherMenuDeroulant = true;">
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_AssurCResponsable', '', 'listeAssurCResponsable');appliqueFormules('AssurCResponsable', '116');"><nobr>&nbsp;</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_AssurCResponsable', 'Berthier Fabien', 'listeAssurCResponsable');appliqueFormules('AssurCResponsable', '116');"><nobr>Berthier Fabien</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_AssurCResponsable', 'CANCELA', 'listeAssurCResponsable');appliqueFormules('AssurCResponsable', '116');"><nobr>CANCELA</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_AssurCResponsable', 'CONDAMINES Caroline', 'listeAssurCResponsable');appliqueFormules('AssurCResponsable', '116');"><nobr>CONDAMINES Caroline</nobr></div>
</div>
</td>
<input id='ChampsOnglet_AssurCPrefixe' name='AssurCPrefixe' value="" type='hidden'>
<input id='ChampsOnglet_AssurSigle' name='AssurSigle' value="" type='hidden'>
</table></td></tr>
</table>
<table id='Onglet2TableNumero7' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:264.33333333333px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet2TableNumero7SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_leg_ref_assurance' class='CelLib' style='width:115px;'>

</td>
<td id='cellule_attr_leg_ref_assurance' data-tableau='Onglet2TableNumero7' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_leg_ref_assurance' style='border:1px solid transparent; background-color:transparent; overflow:hidden; height:16px;   cursor:default;' onMouseOver="javascript:changeZindexManuel('Onglet2TableNumero7', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet2TableNumero7', '');" >
<div id='div_champs_non_modif_leg_ref_assurance' style='width:195px;'></div>
</div>
</td>
</table></td></tr>
</table>
<table id='Onglet2TableNumero8' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:291px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet2TableNumero8SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_NoPolice' class='CelLib' style='width:115px;'>
Police n°
</td>
<td id='cellule_attr_NoPolice' data-tableau='Onglet2TableNumero8' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_NoPolice' style='border:1px inset #C1C1C1;  ' onMouseOver="javascript:changeZindexManuel('Onglet2TableNumero8', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet2TableNumero8', '');" >
<input  class='champs' id='ChampsOnglet_NoPolice' name='NoPolice' autocomplete='off' value="" type='text' style='width:136.5px;border-width:0px; '  onBlur="javascript:appliqueFormules('NoPolice', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
</table></td></tr>
</table>
<table id='Onglet2TableNumero9' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:317.66666666667px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet2TableNumero9SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_NoSinistre' class='CelLib' style='width:115px;'>
Sinistre n°
</td>
<td id='cellule_attr_NoSinistre' data-tableau='Onglet2TableNumero9' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_NoSinistre' style='border:1px inset #C1C1C1;  ' onMouseOver="javascript:changeZindexManuel('Onglet2TableNumero9', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet2TableNumero9', '');" >
<input  class='champs' id='ChampsOnglet_NoSinistre' name='NoSinistre' autocomplete='off' value="" type='text' style='width:136.5px;border-width:0px; '  onBlur="javascript:appliqueFormules('NoSinistre', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
</table></td></tr>
</table>
<table id='Onglet2TableNumero10' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:344.33333333333px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet2TableNumero10SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_DateSinistre' class='CelLib' style='width:115px;'>
Date sinistre
</td>
<td id='cellule_attr_DateSinistre' data-tableau='Onglet2TableNumero10' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_DateSinistre' style='border:1px inset #C1C1C1;  ' onMouseOver="javascript:changeZindexManuel('Onglet2TableNumero10', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet2TableNumero10', '');">
<input class='champs' autocomplete='off' id='ChampsOnglet_DateSinistre' name='DateSinistre' value="" type='text' style='width:65px;border-width:0px; cursor:default; ' onClick="javascript:nePasChangerZindex('Onglet2TableNumero10', 'date');" onFocus="javascript:focusDate('ChampsOnglet_DateSinistre'); select(); valeurInputEnCours=this.value;" onBlur="javascript:blurDate('ChampsOnglet_DateSinistre', 'DateSinistre', '116', '', '', '');"><img id='img_calendrier_ChampsOnglet_DateSinistre' style='cursor:pointer; position:absolute; display:none;' border='0' src='images/Icones/calendrier.png' onMouseDown="javascript:ouvreCalendrier('calendrier.php?id=116&attr=DateSinistre&id_input=ChampsOnglet_DateSinistre&id_div=div_calendrier_DateSinistre&val_input='+this.value+'&HR=21:57:14', 'div_calendrier_DateSinistre', 'ChampsOnglet_DateSinistre');">
</div>
</td>
</table></td></tr>
</table>
<table id='Onglet2TableNumero11' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:371px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet2TableNumero11SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_leg_coord_regl_assurance' class='CelLib' style='width:115px;'>

</td>
<td id='cellule_attr_leg_coord_regl_assurance' data-tableau='Onglet2TableNumero11' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_leg_coord_regl_assurance' style='border:1px solid transparent; background-color:transparent; overflow:hidden; height:16px;   cursor:default;' onMouseOver="javascript:changeZindexManuel('Onglet2TableNumero11', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet2TableNumero11', '');" >
<div id='div_champs_non_modif_leg_coord_regl_assurance' style='width:195px;'></div>
</div>
</td>
</table></td></tr>
</table>
<table id='Onglet2TableNumero12' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:397.66666666667px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet2TableNumero12SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_AssurFactNomPrenom' class='CelLib' style='width:115px;'>
Nom
</td>
<td id='cellule_attr_AssurFactNomPrenom' data-tableau='Onglet2TableNumero12' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_AssurFactNomPrenom' style='border:1px solid #646464;  ' onMouseOver="javascript:changeZindexManuel('Onglet2TableNumero12', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet2TableNumero12', '');" >
<input  class='champs' id='ChampsOnglet_AssurFactNomPrenom' name='AssurFactNomPrenom' autocomplete='off' value="" type='text' style='width:214.5px;border-width:0px; '  onBlur="javascript:appliqueFormules('AssurFactNomPrenom', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
<td id='cellule_lib_BoutCentreReglement' class='CelLib' style='padding-left:10px; width:-351.5px;'>
 
</td>
<td id='cellule_bouton_BoutCentreReglement' style='vertical-align:top;'>
<input type='button' data-ident='' value=""  style="background:#ffffff url('images/icone_Dico.jpg') no-repeat top left; height:19px;  width:19px;  border-width:1px; cursor:pointer;" onClick="javascript:AfficheSuperDico('BoutCentreReglement', 'ListeCentreReglementAssureurDiEzENoAssureur=AssurId', 'NomPrenom>AssurFactNomPrenom;Contact>AssurFactContact;Prefixe>AssurFactPrefixe;Prenom>AssurFactPrenom;Adresse1>AssurFactAdresse1;Adresse2>AssurFactAdresse2;Adresse3>AssurFactAdresse3;CP>AssurFactCP;Ville>AssurFactVille;Tel>AssurFactTel;TeP>AssurFactTeP;DeuxTelephone>AssurFactDeuxTelephone;Fax>AssurFactFax;Email>AssurFactEmail;DeuxEmail>AssurFactDeuxEmail;Note>AssurFactComment', '', '', '', '', false, false); return false;"></td>
</table></td></tr>
</table>
<table id='Onglet2TableNumero13' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:424.33333333333px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet2TableNumero13SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_AssurFactContact' class='CelLib' style='width:115px;'>
Gestionnaire
</td>
<td id='cellule_attr_AssurFactContact' data-tableau='Onglet2TableNumero13' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_AssurFactContact' style='border:1px solid #646464;  ' onMouseOver="javascript:changeZindexManuel('Onglet2TableNumero13', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet2TableNumero13', '');" >
<input  class='champs' id='ChampsOnglet_AssurFactContact' name='AssurFactContact' autocomplete='off' value="" type='text' style='width:214.5px;border-width:0px; '  onBlur="javascript:appliqueFormules('AssurFactContact', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
<td id='cellule_lib_AssurFactPrefixe' class='CelLib' style='padding-left:10px; width:-2px;'>

</td>
<td id='cellule_attr_AssurFactPrefixe' data-tableau='Onglet2TableNumero13' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_AssurFactPrefixe' style='border:1px solid #646464;  ' onMouseOver="javascript:changeZindexManuel('Onglet2TableNumero13', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet2TableNumero13', '');">
<input class='champs' autocomplete='off' id='ChampsOnglet_AssurFactPrefixe' name='AssurFactPrefixe' value="" type='text' style=' width:35px;border-width:0px; '  onBlur="javascript:appliqueFormules('AssurFactPrefixe', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"><img id='Image_AssurFactPrefixe' src='images/2016/bouton_bas.png' alt='' class='BoutDico' onClick="javascript:nePasChangerZindex('Onglet2TableNumero13', 'menu'); afficheCacheMenuDeroulant('listeAssurFactPrefixe', 'ChampsOnglet_AssurFactPrefixe', 'Onglet2TableNumero13');" onMouseDown="javascript:this.src='images/2016/bouton_bas_click.png';" onMouseUp="javascript:this.src='images/2016/bouton_bas.png';">
</div>
<div id='listeAssurFactPrefixe' style='height:110px; overflow-y:auto;overflow-x:hidden;position:fixed;display:none;z-index:5000;border:1px solid #C1C1C1;min-width:48px;background-color:#ffffff;padding:2;' onMouseOver="javascript:cacherMenuDeroulant = false;" onMouseOut="javascript:cacherMenuDeroulant = true;">
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_AssurFactPrefixe', 'M.', 'listeAssurFactPrefixe');appliqueFormules('AssurFactPrefixe', '116');"><nobr>M.</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_AssurFactPrefixe', 'Mme', 'listeAssurFactPrefixe');appliqueFormules('AssurFactPrefixe', '116');"><nobr>Mme</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_AssurFactPrefixe', 'Melle', 'listeAssurFactPrefixe');appliqueFormules('AssurFactPrefixe', '116');"><nobr>Melle</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_AssurFactPrefixe', 'M & Mme', 'listeAssurFactPrefixe');appliqueFormules('AssurFactPrefixe', '116');"><nobr>M & Mme</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_AssurFactPrefixe', 'M & M', 'listeAssurFactPrefixe');appliqueFormules('AssurFactPrefixe', '116');"><nobr>M & M</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_AssurFactPrefixe', 'Mme & Mme', 'listeAssurFactPrefixe');appliqueFormules('AssurFactPrefixe', '116');"><nobr>Mme & Mme</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_AssurFactPrefixe', 'Melle & Melle', 'listeAssurFactPrefixe');appliqueFormules('AssurFactPrefixe', '116');"><nobr>Melle & Melle</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_AssurFactPrefixe', 'SA', 'listeAssurFactPrefixe');appliqueFormules('AssurFactPrefixe', '116');"><nobr>SA</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_AssurFactPrefixe', 'SARL', 'listeAssurFactPrefixe');appliqueFormules('AssurFactPrefixe', '116');"><nobr>SARL</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_AssurFactPrefixe', 'SAS', 'listeAssurFactPrefixe');appliqueFormules('AssurFactPrefixe', '116');"><nobr>SAS</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_AssurFactPrefixe', 'EURL', 'listeAssurFactPrefixe');appliqueFormules('AssurFactPrefixe', '116');"><nobr>EURL</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_AssurFactPrefixe', 'Société', 'listeAssurFactPrefixe');appliqueFormules('AssurFactPrefixe', '116');"><nobr>Société</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_AssurFactPrefixe', 'Entreprise', 'listeAssurFactPrefixe');appliqueFormules('AssurFactPrefixe', '116');"><nobr>Entreprise</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_AssurFactPrefixe', 'Etablissement', 'listeAssurFactPrefixe');appliqueFormules('AssurFactPrefixe', '116');"><nobr>Etablissement</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_AssurFactPrefixe', 'Administration', 'listeAssurFactPrefixe');appliqueFormules('AssurFactPrefixe', '116');"><nobr>Administration</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_AssurFactPrefixe', 'Cabinet', 'listeAssurFactPrefixe');appliqueFormules('AssurFactPrefixe', '116');"><nobr>Cabinet</nobr></div>
</div>
</td>
<input id='ChampsOnglet_AssurFactPrenom' name='AssurFactPrenom' value="" type='hidden'>
</table></td></tr>
</table>
<table id='Onglet2TableNumero14' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:451px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet2TableNumero14SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_AssurFactAdresse1' class='CelLib' style='width:115px;'>
Adresse
</td>
<td id='cellule_attr_AssurFactAdresse1' data-tableau='Onglet2TableNumero14' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_AssurFactAdresse1' style='border:1px solid #646464;  ' onMouseOver="javascript:changeZindexManuel('Onglet2TableNumero14', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet2TableNumero14', '');" >
<input  class='champs' id='ChampsOnglet_AssurFactAdresse1' name='AssurFactAdresse1' autocomplete='off' value="" type='text' style='width:214.5px;border-width:0px; '  onBlur="javascript:appliqueFormules('AssurFactAdresse1', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
</table></td></tr>
</table>
<table id='Onglet2TableNumero15' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:477.66666666667px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet2TableNumero15SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_AssurFactAdresse2' class='CelLib' style='width:115px;'>

</td>
<td id='cellule_attr_AssurFactAdresse2' data-tableau='Onglet2TableNumero15' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_AssurFactAdresse2' style='border:1px solid #646464;  ' onMouseOver="javascript:changeZindexManuel('Onglet2TableNumero15', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet2TableNumero15', '');" >
<input  class='champs' id='ChampsOnglet_AssurFactAdresse2' name='AssurFactAdresse2' autocomplete='off' value="" type='text' style='width:214.5px;border-width:0px; '  onBlur="javascript:appliqueFormules('AssurFactAdresse2', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
<input id='ChampsOnglet_AssurFactAdresse3' name='AssurFactAdresse3' value="" type='hidden'>
</table></td></tr>
</table>
<table id='Onglet2TableNumero16' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:504.33333333333px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet2TableNumero16SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_AssurFactCP' class='CelLib' style='width:115px;'>
CP
</td>
<td id='cellule_attr_AssurFactCP' data-tableau='Onglet2TableNumero16' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_AssurFactCP' style='border:1px solid #646464;  ' onMouseOver="javascript:changeZindexManuel('Onglet2TableNumero16', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet2TableNumero16', '');" >
<input  class='champs' id='ChampsOnglet_AssurFactCP' name='AssurFactCP' autocomplete='off' value="" type='text' style='width:52px;border-width:0px; '  onBlur="javascript:appliqueFormules('AssurFactCP', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
<td id='cellule_lib_AssurFactVille' class='CelLib' style='padding-left:10px; width:28px;'>
Ville
</td>
<td id='cellule_attr_AssurFactVille' data-tableau='Onglet2TableNumero16' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_AssurFactVille' style='border:1px solid #646464;  ' onMouseOver="javascript:changeZindexManuel('Onglet2TableNumero16', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet2TableNumero16', '');" >
<input  class='champs' id='ChampsOnglet_AssurFactVille' name='AssurFactVille' autocomplete='off' value="" type='text' style='width:130px;border-width:0px; '  onBlur="javascript:appliqueFormules('AssurFactVille', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
</table></td></tr>
</table>
<table id='Onglet2TableNumero17' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:531px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet2TableNumero17SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_AssurFactTel' class='CelLib' style='width:115px;'>
Tél.
</td>
<td id='cellule_attr_AssurFactTel' data-tableau='Onglet2TableNumero17' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_AssurFactTel' style='border:1px solid #646464;  ' onMouseOver="javascript:changeZindexManuel('Onglet2TableNumero17', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet2TableNumero17', '');" >
<input  class='champs' id='ChampsOnglet_AssurFactTel' name='AssurFactTel' autocomplete='off' value="" type='text' style='width:97.5px;border-width:0px; '  onBlur="javascript:appliqueFormules('AssurFactTel', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
<td id='cellule_lib_AssurFactTeP' class='CelLib' style='padding-left:10px; width:52.17px;'>
Tél.P
</td>
<td id='cellule_attr_AssurFactTeP' data-tableau='Onglet2TableNumero17' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_AssurFactTeP' style='border:1px solid #646464;  ' onMouseOver="javascript:changeZindexManuel('Onglet2TableNumero17', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet2TableNumero17', '');" >
<input  class='champs' id='ChampsOnglet_AssurFactTeP' name='AssurFactTeP' autocomplete='off' value="" type='text' style='width:97.5px;border-width:0px; '  onBlur="javascript:appliqueFormules('AssurFactTeP', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
</table></td></tr>
</table>
<table id='Onglet2TableNumero18' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:557.66666666667px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet2TableNumero18SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_AssurFactDeuxTelephone' class='CelLib' style='width:115px;'>
Tél. 2
</td>
<td id='cellule_attr_AssurFactDeuxTelephone' data-tableau='Onglet2TableNumero18' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_AssurFactDeuxTelephone' style='border:1px solid #646464;  ' onMouseOver="javascript:changeZindexManuel('Onglet2TableNumero18', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet2TableNumero18', '');" >
<input  class='champs' id='ChampsOnglet_AssurFactDeuxTelephone' name='AssurFactDeuxTelephone' autocomplete='off' value="" type='text' style='width:97.5px;border-width:0px; '  onBlur="javascript:appliqueFormules('AssurFactDeuxTelephone', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
<td id='cellule_lib_AssurFactFax' class='CelLib' style='padding-left:10px; width:52.17px;'>
Fax
</td>
<td id='cellule_attr_AssurFactFax' data-tableau='Onglet2TableNumero18' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_AssurFactFax' style='border:1px solid #646464;  ' onMouseOver="javascript:changeZindexManuel('Onglet2TableNumero18', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet2TableNumero18', '');" >
<input  class='champs' id='ChampsOnglet_AssurFactFax' name='AssurFactFax' autocomplete='off' value="" type='text' style='width:97.5px;border-width:0px; '  onBlur="javascript:appliqueFormules('AssurFactFax', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
</table></td></tr>
</table>
<table id='Onglet2TableNumero19' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:584.33333333333px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet2TableNumero19SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_AssurFactEmail' class='CelLib' style='width:115px;'>
Email
</td>
<td id='cellule_attr_AssurFactEmail' data-tableau='Onglet2TableNumero19' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_AssurFactEmail' style='border:1px solid #646464;  ' onMouseOver="javascript:changeZindexManuel('Onglet2TableNumero19', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet2TableNumero19', '');" >
<input  class='champs' id='ChampsOnglet_AssurFactEmail' name='AssurFactEmail' autocomplete='off' value="" type='text' style='width:214.5px;border-width:0px; '  onBlur="javascript:appliqueFormules('AssurFactEmail', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
</table></td></tr>
</table>
<table id='Onglet2TableNumero20' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:611px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet2TableNumero20SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_AssurFactDeuxEmail' class='CelLib' style='width:115px;'>
Email 2
</td>
<td id='cellule_attr_AssurFactDeuxEmail' data-tableau='Onglet2TableNumero20' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_AssurFactDeuxEmail' style='border:1px solid #646464;  ' onMouseOver="javascript:changeZindexManuel('Onglet2TableNumero20', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet2TableNumero20', '');" >
<input  class='champs' id='ChampsOnglet_AssurFactDeuxEmail' name='AssurFactDeuxEmail' autocomplete='off' value="" type='text' style='width:214.5px;border-width:0px; '  onBlur="javascript:appliqueFormules('AssurFactDeuxEmail', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
</table></td></tr>
</table>
<table id='Onglet2TableNumero21' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:637.66666666667px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet2TableNumero21SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_AssurFactComment' class='CelLib' style='width:115px;'>
Commentaire
</td>
<td id='cellule_attr_AssurFactComment' data-tableau='Onglet2TableNumero21' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_AssurFactComment' style=' border:1px solid #646464;  ' onMouseOver="javascript:changeZindexManuel('Onglet2TableNumero21', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet2TableNumero21', '');">
<textarea class='champs' id='ChampsOnglet_AssurFactComment' data-type='TEXT2' name='AssurFactComment' style='width:195px; height:60px; border-width:0px; '  onBlur="javascript:appliqueFormules('AssurFactComment', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;">
</textarea>
</div>
</td>
</table></td></tr>
</table>
<table id='Onglet2TableNumero22' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:19.333333333333px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;' id='table_etiquette_Exp1RaisonSociale'>
<td style='padding-right:5px;  width:528.33px;'>
</td>
<td style='padding-bottom:10px;'>
<div class='etiquette' style='color:#FFFFFF;  width:140px; '>
<nobr>Expert Cie/Mut</nobr>
</div>
</td>
</table>
</td>
</tr>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet2TableNumero22SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_Exp1RaisonSociale' class='CelLib' style='width:528.33px;'>
Cabinet d'expertise
</td>
<td id='cellule_attr_Exp1RaisonSociale' data-tableau='Onglet2TableNumero22' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_Exp1RaisonSociale' style='border:1px inset #C1C1C1;  ' onMouseOver="javascript:changeZindexManuel('Onglet2TableNumero22', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet2TableNumero22', '');" >
<input  class='champs' id='ChampsOnglet_Exp1RaisonSociale' name='Exp1RaisonSociale' autocomplete='off' value="" type='text' style='width:214.5px;border-width:0px; '  onBlur="javascript:appliqueFormules('Exp1RaisonSociale', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
<td id='cellule_attr_Exp1CabExpertiseId' data-tableau='Onglet2TableNumero22' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_Exp1CabExpertiseId' style='border:1px solid #646464;  ' onMouseOver="javascript:changeZindexManuel('Onglet2TableNumero22', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet2TableNumero22', '');" onDblClick="javascript:RechOuvertureDist('UP_CabinetsExpertise', 'Id', 'Exp1CabExpertiseId', 'Exp1CabExpertiseId');">
<input  class='champs' id='ChampsOnglet_Exp1CabExpertiseId' name='Exp1CabExpertiseId' autocomplete='off' value="" type='text' style='width:32.5px;border-width:0px; '  onBlur="javascript:appliqueFormules('Exp1CabExpertiseId', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
<td id='cellule_bouton_Exp1CabExpertiseId' style='vertical-align:top;'>
<input type='button' data-ident='' value=""  style="background:#ffffff url('images/icone_Dico.jpg') no-repeat top left; height:19px;  width:19px;  border-width:1px; cursor:pointer;" onClick="javascript:AfficheSuperDico('Exp1CabExpertiseId', 'UP_CabinetsExpertise', 'Id>Exp1CabExpertiseId;RaisonSociale>Exp1RaisonSociale;Adresse1>Exp1Adresse1;Adresse2>Exp1Adresse2;Adresse3>Exp1Adresse3;CP>Exp1CP;Ville>Exp1Ville;CResponsable>Exp1CabExpertiseCResponsable;CPrefixe>Exp1CabExpertiseCPrefixe;Sigle>Exp1CabExpertiseSigle', '', '', '', '', false, false); return false;"><input type='button' data-ident='' value=""  style="background:#ffffff url('images/icone_chercher.gif') no-repeat top left; height:19px;  width:19px;  border-width:1px; cursor:pointer;" onClick="javascript:AfficheSuperDicoRechercher('UP_CabinetsExpertise', 'Id>Exp1CabExpertiseId;RaisonSociale>Exp1RaisonSociale;Adresse1>Exp1Adresse1;Adresse2>Exp1Adresse2;Adresse3>Exp1Adresse3;CP>Exp1CP;Ville>Exp1Ville;CResponsable>Exp1CabExpertiseCResponsable;CPrefixe>Exp1CabExpertiseCPrefixe;Sigle>Exp1CabExpertiseSigle', 'RaisonSociale', 'Rechercher un texte dans les noms des cabinets dCoTeexpertise', '', '', 'Exp1RaisonSociale', false, 'Exp1CabExpertiseId'); return false;"></td>
</table></td></tr>
</table>
<table id='Onglet2TableNumero23' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:86px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet2TableNumero23SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_Exp1CabExpertiseCResponsable' class='CelLib' style='width:528.33px;'>
Resp. UP Cabinet
</td>
<td id='cellule_attr_Exp1CabExpertiseCResponsable' data-tableau='Onglet2TableNumero23' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_Exp1CabExpertiseCResponsable' style='border:1px inset #C1C1C1;  ' onMouseOver="javascript:changeZindexManuel('Onglet2TableNumero23', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet2TableNumero23', '');">
<input class='champs' autocomplete='off' id='ChampsOnglet_Exp1CabExpertiseCResponsable' name='Exp1CabExpertiseCResponsable' value="" type='text' style=' width:100px;border-width:0px; '  onBlur="javascript:appliqueFormules('Exp1CabExpertiseCResponsable', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"><img id='Image_Exp1CabExpertiseCResponsable' src='images/2016/bouton_bas.png' alt='' class='BoutDico' onClick="javascript:nePasChangerZindex('Onglet2TableNumero23', 'menu'); afficheCacheMenuDeroulant('listeExp1CabExpertiseCResponsable', 'ChampsOnglet_Exp1CabExpertiseCResponsable', 'Onglet2TableNumero23');" onMouseDown="javascript:this.src='images/2016/bouton_bas_click.png';" onMouseUp="javascript:this.src='images/2016/bouton_bas.png';">
</div>
<div id='listeExp1CabExpertiseCResponsable' style=' overflow-y:auto;overflow-x:hidden;position:fixed;display:none;z-index:5000;border:1px solid #C1C1C1;min-width:113px;background-color:#ffffff;padding:2;' onMouseOver="javascript:cacherMenuDeroulant = false;" onMouseOut="javascript:cacherMenuDeroulant = true;">
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_Exp1CabExpertiseCResponsable', '', 'listeExp1CabExpertiseCResponsable');appliqueFormules('Exp1CabExpertiseCResponsable', '116');"><nobr>&nbsp;</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_Exp1CabExpertiseCResponsable', 'Berthier Fabien', 'listeExp1CabExpertiseCResponsable');appliqueFormules('Exp1CabExpertiseCResponsable', '116');"><nobr>Berthier Fabien</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_Exp1CabExpertiseCResponsable', 'CANCELA', 'listeExp1CabExpertiseCResponsable');appliqueFormules('Exp1CabExpertiseCResponsable', '116');"><nobr>CANCELA</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_Exp1CabExpertiseCResponsable', 'CONDAMINES Caroline', 'listeExp1CabExpertiseCResponsable');appliqueFormules('Exp1CabExpertiseCResponsable', '116');"><nobr>CONDAMINES Caroline</nobr></div>
</div>
</td>
<input id='ChampsOnglet_Exp1CabExpertiseCPrefixe' name='Exp1CabExpertiseCPrefixe' value="" type='hidden'>
<input id='ChampsOnglet_Exp1CabExpertiseSigle' name='Exp1CabExpertiseSigle' value="" type='hidden'>
</table></td></tr>
</table>
<table id='Onglet2TableNumero24' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:112.66666666667px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet2TableNumero24SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_Exp1NomPrenom' class='CelLib' style='width:528.33px;'>
Nom
</td>
<td id='cellule_attr_Exp1NomPrenom' data-tableau='Onglet2TableNumero24' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_Exp1NomPrenom' style='border:1px inset #C1C1C1;  ' onMouseOver="javascript:changeZindexManuel('Onglet2TableNumero24', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet2TableNumero24', '');" >
<input  class='champs' id='ChampsOnglet_Exp1NomPrenom' name='Exp1NomPrenom' autocomplete='off' value="" type='text' style='width:214.5px;border-width:0px; '  onBlur="javascript:appliqueFormules('Exp1NomPrenom', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
<td id='cellule_attr_Exp1Id' data-tableau='Onglet2TableNumero24' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_Exp1Id' style='border:1px solid #646464;  ' onMouseOver="javascript:changeZindexManuel('Onglet2TableNumero24', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet2TableNumero24', '');" onDblClick="javascript:RechOuvertureDist('UP_Experts', 'Id', 'Exp1Id', 'Exp1Id');">
<input  class='champs' id='ChampsOnglet_Exp1Id' name='Exp1Id' autocomplete='off' value="" type='text' style='width:32.5px;border-width:0px; '  onBlur="javascript:appliqueFormules('Exp1Id', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
<td id='cellule_bouton_Exp1Id' style='vertical-align:top;'>
<input type='button' data-ident='' value=""  style="background:#ffffff url('images/icone_Dico.jpg') no-repeat top left; height:19px;  width:19px;  border-width:1px; cursor:pointer;" onClick="javascript:AfficheSuperDico('Exp1Id', 'UP_Experts', 'Id>Exp1Id;RaisonSociale>Exp1RaisonSociale;Reference>Exp1Reference;CabExpertiseId>Exp1CabExpertiseId;CabExpertiseCResponsable>Exp1CabExpertiseCResponsable;CabExpertiseCPrefixe>Exp1CabExpertiseCPrefixe;CabExpertiseSigle>Exp1CabExpertiseSigle;NomPrenom>Exp1NomPrenom;Prefixe>Exp1Prefixe;Prenom>Exp1Prenom;Adresse1>Exp1Adresse1;Adresse2>Exp1Adresse2;Adresse3>Exp1Adresse3;CP>Exp1CP;Ville>Exp1Ville;Tel>Exp1Tel;TeP>Exp1TeP;Email>Exp1Email;CResponsable>Exp1CResponsable;CPrefixe>Exp1CPrefixe;Sigle>Exp1Sigle;AccordCadre>Exp1AccordCadre;AssistNomPrenom>Exp1AssistNomPrenom;AssistPrefixe>Exp1AssistPrefixe;AssistPrenom>Exp1AssistPrenom;AssistTel>Exp1AssistTel;AssistTeP>Exp1AssistTeP;AssistEmail>Exp1AssistEmail;RedevanceCom>Exp1RedevanceCom;Note>Exp1Comment', '', '', '', '', false, false); return false;"><input type='button' data-ident='' value=""  style="background:#ffffff url('images/icone_chercher.gif') no-repeat top left; height:19px;  width:19px;  border-width:1px; cursor:pointer;" onClick="javascript:AfficheSuperDicoRechercher('UP_Experts', 'Id>Exp1Id;RaisonSociale>Exp1RaisonSociale;Reference>Exp1Reference;CabExpertiseId>Exp1CabExpertiseId;CabExpertiseCResponsable>Exp1CabExpertiseCResponsable;CabExpertiseCPrefixe>Exp1CabExpertiseCPrefixe;CabExpertiseSigle>Exp1CabExpertiseSigle;NomPrenom>Exp1NomPrenom;Prefixe>Exp1Prefixe;Prenom>Exp1Prenom;Adresse1>Exp1Adresse1;Adresse2>Exp1Adresse2;Adresse3>Exp1Adresse3;CP>Exp1CP;Ville>Exp1Ville;Tel>Exp1Tel;TeP>Exp1TeP;Email>Exp1Email;CResponsable>Exp1CResponsable;CPrefixe>Exp1CPrefixe;Sigle>Exp1Sigle;AccordCadre>Exp1AccordCadre;AssistNomPrenom>Exp1AssistNomPrenom;AssistPrefixe>Exp1AssistPrefixe;AssistPrenom>Exp1AssistPrenom;AssistTel>Exp1AssistTel;AssistTeP>Exp1AssistTeP;AssistEmail>Exp1AssistEmail;RedevanceCom>Exp1RedevanceCom;Note>Exp1Comment', 'NomPrenom', 'Rechercher un texte dans les noms des experts', '', '', 'Exp1NomPrenom', false, 'Exp1Id'); return false;"></td>
<td id='cellule_lib_Exp1Prefixe' class='CelLib' style='padding-left:10px; width:-2px;'>

</td>
<td id='cellule_attr_Exp1Prefixe' data-tableau='Onglet2TableNumero24' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_Exp1Prefixe' style='border:1px inset #C1C1C1;  ' onMouseOver="javascript:changeZindexManuel('Onglet2TableNumero24', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet2TableNumero24', '');">
<input class='champs' autocomplete='off' id='ChampsOnglet_Exp1Prefixe' name='Exp1Prefixe' value="" type='text' style=' width:35px;border-width:0px; '  onBlur="javascript:appliqueFormules('Exp1Prefixe', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"><img id='Image_Exp1Prefixe' src='images/2016/bouton_bas.png' alt='' class='BoutDico' onClick="javascript:nePasChangerZindex('Onglet2TableNumero24', 'menu'); afficheCacheMenuDeroulant('listeExp1Prefixe', 'ChampsOnglet_Exp1Prefixe', 'Onglet2TableNumero24');" onMouseDown="javascript:this.src='images/2016/bouton_bas_click.png';" onMouseUp="javascript:this.src='images/2016/bouton_bas.png';">
</div>
<div id='listeExp1Prefixe' style='height:110px; overflow-y:auto;overflow-x:hidden;position:fixed;display:none;z-index:5000;border:1px solid #C1C1C1;min-width:48px;background-color:#ffffff;padding:2;' onMouseOver="javascript:cacherMenuDeroulant = false;" onMouseOut="javascript:cacherMenuDeroulant = true;">
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_Exp1Prefixe', 'M.', 'listeExp1Prefixe');appliqueFormules('Exp1Prefixe', '116');"><nobr>M.</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_Exp1Prefixe', 'Mme', 'listeExp1Prefixe');appliqueFormules('Exp1Prefixe', '116');"><nobr>Mme</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_Exp1Prefixe', 'Melle', 'listeExp1Prefixe');appliqueFormules('Exp1Prefixe', '116');"><nobr>Melle</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_Exp1Prefixe', 'M & Mme', 'listeExp1Prefixe');appliqueFormules('Exp1Prefixe', '116');"><nobr>M & Mme</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_Exp1Prefixe', 'M & M', 'listeExp1Prefixe');appliqueFormules('Exp1Prefixe', '116');"><nobr>M & M</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_Exp1Prefixe', 'Mme & Mme', 'listeExp1Prefixe');appliqueFormules('Exp1Prefixe', '116');"><nobr>Mme & Mme</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_Exp1Prefixe', 'Melle & Melle', 'listeExp1Prefixe');appliqueFormules('Exp1Prefixe', '116');"><nobr>Melle & Melle</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_Exp1Prefixe', 'SA', 'listeExp1Prefixe');appliqueFormules('Exp1Prefixe', '116');"><nobr>SA</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_Exp1Prefixe', 'SARL', 'listeExp1Prefixe');appliqueFormules('Exp1Prefixe', '116');"><nobr>SARL</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_Exp1Prefixe', 'SAS', 'listeExp1Prefixe');appliqueFormules('Exp1Prefixe', '116');"><nobr>SAS</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_Exp1Prefixe', 'EURL', 'listeExp1Prefixe');appliqueFormules('Exp1Prefixe', '116');"><nobr>EURL</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_Exp1Prefixe', 'Société', 'listeExp1Prefixe');appliqueFormules('Exp1Prefixe', '116');"><nobr>Société</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_Exp1Prefixe', 'Entreprise', 'listeExp1Prefixe');appliqueFormules('Exp1Prefixe', '116');"><nobr>Entreprise</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_Exp1Prefixe', 'Etablissement', 'listeExp1Prefixe');appliqueFormules('Exp1Prefixe', '116');"><nobr>Etablissement</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_Exp1Prefixe', 'Administration', 'listeExp1Prefixe');appliqueFormules('Exp1Prefixe', '116');"><nobr>Administration</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_Exp1Prefixe', 'Cabinet', 'listeExp1Prefixe');appliqueFormules('Exp1Prefixe', '116');"><nobr>Cabinet</nobr></div>
</div>
</td>
</table></td></tr>
</table>
<table id='Onglet2TableNumero25' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:139.33333333333px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet2TableNumero25SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_Exp1Reference' class='CelLib' style='width:528.33px;'>
Réf. Expert
</td>
<td id='cellule_attr_Exp1Reference' data-tableau='Onglet2TableNumero25' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_Exp1Reference' style='border:1px inset #C1C1C1;  ' onMouseOver="javascript:changeZindexManuel('Onglet2TableNumero25', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet2TableNumero25', '');" >
<input  class='champs' id='ChampsOnglet_Exp1Reference' name='Exp1Reference' autocomplete='off' value="" type='text' style='width:65px;border-width:0px; '  onBlur="javascript:appliqueFormules('Exp1Reference', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
<input id='ChampsOnglet_Exp1Prenom' name='Exp1Prenom' value="" type='hidden'>
<input id='ChampsOnglet_Exp1Adresse1' name='Exp1Adresse1' value="" type='hidden'>
<input id='ChampsOnglet_Exp1Adresse2' name='Exp1Adresse2' value="" type='hidden'>
<input id='ChampsOnglet_Exp1Adresse3' name='Exp1Adresse3' value="" type='hidden'>
<input id='ChampsOnglet_Exp1CP' name='Exp1CP' value="" type='hidden'>
<input id='ChampsOnglet_Exp1Ville' name='Exp1Ville' value="" type='hidden'>
</table></td></tr>
</table>
<table id='Onglet2TableNumero26' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:166px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet2TableNumero26SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_Exp1Tel' class='CelLib' style='width:528.33px;'>
Tél.
</td>
<td id='cellule_attr_Exp1Tel' data-tableau='Onglet2TableNumero26' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_Exp1Tel' style='border:1px inset #C1C1C1;  ' onMouseOver="javascript:changeZindexManuel('Onglet2TableNumero26', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet2TableNumero26', '');" >
<input  class='champs' id='ChampsOnglet_Exp1Tel' name='Exp1Tel' autocomplete='off' value="" type='text' style='width:97.5px;border-width:0px; '  onBlur="javascript:appliqueFormules('Exp1Tel', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
<td id='cellule_lib_Exp1TeP' class='CelLib' style='padding-left:10px; width:38.83px;'>
Tél.P
</td>
<td id='cellule_attr_Exp1TeP' data-tableau='Onglet2TableNumero26' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_Exp1TeP' style='border:1px inset #C1C1C1;  ' onMouseOver="javascript:changeZindexManuel('Onglet2TableNumero26', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet2TableNumero26', '');" >
<input  class='champs' id='ChampsOnglet_Exp1TeP' name='Exp1TeP' autocomplete='off' value="" type='text' style='width:97.5px;border-width:0px; '  onBlur="javascript:appliqueFormules('Exp1TeP', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
</table></td></tr>
</table>
<table id='Onglet2TableNumero27' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:192.66666666667px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet2TableNumero27SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_Exp1Email' class='CelLib' style='width:528.33px;'>
Email
</td>
<td id='cellule_attr_Exp1Email' data-tableau='Onglet2TableNumero27' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_Exp1Email' style='border:1px inset #C1C1C1;  ' onMouseOver="javascript:changeZindexManuel('Onglet2TableNumero27', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet2TableNumero27', '');" >
<input  class='champs' id='ChampsOnglet_Exp1Email' name='Exp1Email' autocomplete='off' value="" type='text' style='width:214.5px;border-width:0px; '  onBlur="javascript:appliqueFormules('Exp1Email', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
</table></td></tr>
</table>
<table id='Onglet2TableNumero28' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:219.33333333333px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet2TableNumero28SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_Exp1CResponsable' class='CelLib' style='width:528.33px;'>
Resp. compte UP
</td>
<td id='cellule_attr_Exp1CResponsable' data-tableau='Onglet2TableNumero28' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_Exp1CResponsable' style='border:1px inset #C1C1C1;  ' onMouseOver="javascript:changeZindexManuel('Onglet2TableNumero28', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet2TableNumero28', '');">
<input class='champs' autocomplete='off' id='ChampsOnglet_Exp1CResponsable' name='Exp1CResponsable' value="" type='text' style=' width:100px;border-width:0px; '  onBlur="javascript:appliqueFormules('Exp1CResponsable', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"><img id='Image_Exp1CResponsable' src='images/2016/bouton_bas.png' alt='' class='BoutDico' onClick="javascript:nePasChangerZindex('Onglet2TableNumero28', 'menu'); afficheCacheMenuDeroulant('listeExp1CResponsable', 'ChampsOnglet_Exp1CResponsable', 'Onglet2TableNumero28');" onMouseDown="javascript:this.src='images/2016/bouton_bas_click.png';" onMouseUp="javascript:this.src='images/2016/bouton_bas.png';">
</div>
<div id='listeExp1CResponsable' style=' overflow-y:auto;overflow-x:hidden;position:fixed;display:none;z-index:5000;border:1px solid #C1C1C1;min-width:113px;background-color:#ffffff;padding:2;' onMouseOver="javascript:cacherMenuDeroulant = false;" onMouseOut="javascript:cacherMenuDeroulant = true;">
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_Exp1CResponsable', '', 'listeExp1CResponsable');appliqueFormules('Exp1CResponsable', '116');"><nobr>&nbsp;</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_Exp1CResponsable', 'Berthier Fabien', 'listeExp1CResponsable');appliqueFormules('Exp1CResponsable', '116');"><nobr>Berthier Fabien</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_Exp1CResponsable', 'CANCELA', 'listeExp1CResponsable');appliqueFormules('Exp1CResponsable', '116');"><nobr>CANCELA</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_Exp1CResponsable', 'CONDAMINES Caroline', 'listeExp1CResponsable');appliqueFormules('Exp1CResponsable', '116');"><nobr>CONDAMINES Caroline</nobr></div>
</div>
</td>
<input id='ChampsOnglet_Exp1CPrefixe' name='Exp1CPrefixe' value="" type='hidden'>
<input id='ChampsOnglet_Exp1Sigle' name='Exp1Sigle' value="" type='hidden'>
</table></td></tr>
</table>
<table id='Onglet2TableNumero29' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:246px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet2TableNumero29SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_Exp1AccordCadre' class='CelLib' style='width:528.33px;'>
Accord Cadre
</td>
<td id='cellule_attr_Exp1AccordCadre' data-tableau='Onglet2TableNumero29' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_Exp1AccordCadre' style='border:1px inset #C1C1C1;  ' onMouseOver="javascript:changeZindexManuel('Onglet2TableNumero29', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet2TableNumero29', '');">
<input class='champs' autocomplete='off' id='ChampsOnglet_Exp1AccordCadre' name='Exp1AccordCadre' value="" type='text' style='z-index:5;  width:22px;border-width:0px; ' readOnly='readOnly' onFocus="javascript:select(); valeurInputEnCours=this.value;"><img id='Image_Exp1AccordCadre' src='images/2016/bouton_bas.png' alt='' class='BoutDico' onClick="javascript:nePasChangerZindex('Onglet2TableNumero29', 'menu'); afficheCacheMenuDeroulant('listeExp1AccordCadre', 'ChampsOnglet_Exp1AccordCadre', 'Onglet2TableNumero29');" onMouseDown="javascript:this.src='images/2016/bouton_bas_click.png';" onMouseUp="javascript:this.src='images/2016/bouton_bas.png';">
</div>
<div id='listeExp1AccordCadre' style=' overflow-y:auto;overflow-x:hidden;position:fixed;display:none;z-index:5000;border:1px solid #C1C1C1;min-width:35px;background-color:#ffffff;padding:2;' onMouseOver="javascript:cacherMenuDeroulant = false;" onMouseOut="javascript:cacherMenuDeroulant = true;">
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_Exp1AccordCadre', '', 'listeExp1AccordCadre');appliqueFormules('Exp1AccordCadre', '116');"><nobr>&nbsp;</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_Exp1AccordCadre', 'OUI', 'listeExp1AccordCadre');appliqueFormules('Exp1AccordCadre', '116');"><nobr>OUI</nobr></div>
</div>
</td>
<td id='cellule_lib_Exp1RedevanceCom' class='CelLib' style='padding-left:10px; width:130.67px;'>
Redevance comm.
</td>
<td id='cellule_attr_Exp1RedevanceCom' data-tableau='Onglet2TableNumero29' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_Exp1RedevanceCom' style='border:1px inset #C1C1C1;  ' onMouseOver="javascript:changeZindexManuel('Onglet2TableNumero29', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet2TableNumero29', '');">
<input class='champs' autocomplete='off' id='ChampsOnglet_Exp1RedevanceCom' name='Exp1RedevanceCom' value="0" type='text' style='width:39px;border-width:0px; text-align:right; '  onBlur="javascript:appliqueFormules('Exp1RedevanceCom', '116');" onKeyDown="javascript:onKeyDownNumerique(this);" onKeyUp="javascript:onKeyUpNumerique(this);" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
<td id='cellule_unite_Exp1RedevanceCom' class='CelUnite' style='width:7px;'>
<nobr>%</nobr>
</td>
</table></td></tr>
</table>
<table id='Onglet2TableNumero30' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:272.66666666667px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet2TableNumero30SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_Exp1Comment' class='CelLib' style='width:528.33px;'>
Commentaire
</td>
<td id='cellule_attr_Exp1Comment' data-tableau='Onglet2TableNumero30' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_Exp1Comment' style=' border:1px inset #C1C1C1;  ' onMouseOver="javascript:changeZindexManuel('Onglet2TableNumero30', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet2TableNumero30', '');">
<textarea class='champs' id='ChampsOnglet_Exp1Comment' data-type='TEXT2' name='Exp1Comment' style='width:195px; height:40px; border-width:0px; '  onBlur="javascript:appliqueFormules('Exp1Comment', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;">
</textarea>
</div>
</td>
</table></td></tr>
</table>
<table id='Onglet2TableNumero31' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:324.33333333333px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet2TableNumero31SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_leg_coord_assist_expert1' class='CelLib' style='width:528.33px;'>

</td>
<td id='cellule_attr_leg_coord_assist_expert1' data-tableau='Onglet2TableNumero31' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_leg_coord_assist_expert1' style='border:1px solid transparent; background-color:transparent; overflow:hidden; height:16px;   cursor:default;' onMouseOver="javascript:changeZindexManuel('Onglet2TableNumero31', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet2TableNumero31', '');" >
<div id='div_champs_non_modif_leg_coord_assist_expert1' style='width:195px;'></div>
</div>
</td>
</table></td></tr>
</table>
<table id='Onglet2TableNumero32' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:351px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet2TableNumero32SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_Exp1AssistNomPrenom' class='CelLib' style='width:528.33px;'>
Nom
</td>
<td id='cellule_attr_Exp1AssistNomPrenom' data-tableau='Onglet2TableNumero32' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_Exp1AssistNomPrenom' style='border:1px inset #C1C1C1;  ' onMouseOver="javascript:changeZindexManuel('Onglet2TableNumero32', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet2TableNumero32', '');" >
<input  class='champs' id='ChampsOnglet_Exp1AssistNomPrenom' name='Exp1AssistNomPrenom' autocomplete='off' value="" type='text' style='width:214.5px;border-width:0px; '  onBlur="javascript:appliqueFormules('Exp1AssistNomPrenom', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
<td id='cellule_lib_Exp1AssistPrefixe' class='CelLib' style='padding-left:10px; width:-2px;'>

</td>
<td id='cellule_attr_Exp1AssistPrefixe' data-tableau='Onglet2TableNumero32' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_Exp1AssistPrefixe' style='border:1px inset #C1C1C1;  ' onMouseOver="javascript:changeZindexManuel('Onglet2TableNumero32', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet2TableNumero32', '');">
<input class='champs' autocomplete='off' id='ChampsOnglet_Exp1AssistPrefixe' name='Exp1AssistPrefixe' value="" type='text' style=' width:35px;border-width:0px; '  onBlur="javascript:appliqueFormules('Exp1AssistPrefixe', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"><img id='Image_Exp1AssistPrefixe' src='images/2016/bouton_bas.png' alt='' class='BoutDico' onClick="javascript:nePasChangerZindex('Onglet2TableNumero32', 'menu'); afficheCacheMenuDeroulant('listeExp1AssistPrefixe', 'ChampsOnglet_Exp1AssistPrefixe', 'Onglet2TableNumero32');" onMouseDown="javascript:this.src='images/2016/bouton_bas_click.png';" onMouseUp="javascript:this.src='images/2016/bouton_bas.png';">
</div>
<div id='listeExp1AssistPrefixe' style='height:110px; overflow-y:auto;overflow-x:hidden;position:fixed;display:none;z-index:5000;border:1px solid #C1C1C1;min-width:48px;background-color:#ffffff;padding:2;' onMouseOver="javascript:cacherMenuDeroulant = false;" onMouseOut="javascript:cacherMenuDeroulant = true;">
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_Exp1AssistPrefixe', 'M.', 'listeExp1AssistPrefixe');appliqueFormules('Exp1AssistPrefixe', '116');"><nobr>M.</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_Exp1AssistPrefixe', 'Mme', 'listeExp1AssistPrefixe');appliqueFormules('Exp1AssistPrefixe', '116');"><nobr>Mme</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_Exp1AssistPrefixe', 'Melle', 'listeExp1AssistPrefixe');appliqueFormules('Exp1AssistPrefixe', '116');"><nobr>Melle</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_Exp1AssistPrefixe', 'M & Mme', 'listeExp1AssistPrefixe');appliqueFormules('Exp1AssistPrefixe', '116');"><nobr>M & Mme</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_Exp1AssistPrefixe', 'M & M', 'listeExp1AssistPrefixe');appliqueFormules('Exp1AssistPrefixe', '116');"><nobr>M & M</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_Exp1AssistPrefixe', 'Mme & Mme', 'listeExp1AssistPrefixe');appliqueFormules('Exp1AssistPrefixe', '116');"><nobr>Mme & Mme</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_Exp1AssistPrefixe', 'Melle & Melle', 'listeExp1AssistPrefixe');appliqueFormules('Exp1AssistPrefixe', '116');"><nobr>Melle & Melle</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_Exp1AssistPrefixe', 'SA', 'listeExp1AssistPrefixe');appliqueFormules('Exp1AssistPrefixe', '116');"><nobr>SA</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_Exp1AssistPrefixe', 'SARL', 'listeExp1AssistPrefixe');appliqueFormules('Exp1AssistPrefixe', '116');"><nobr>SARL</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_Exp1AssistPrefixe', 'SAS', 'listeExp1AssistPrefixe');appliqueFormules('Exp1AssistPrefixe', '116');"><nobr>SAS</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_Exp1AssistPrefixe', 'EURL', 'listeExp1AssistPrefixe');appliqueFormules('Exp1AssistPrefixe', '116');"><nobr>EURL</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_Exp1AssistPrefixe', 'Société', 'listeExp1AssistPrefixe');appliqueFormules('Exp1AssistPrefixe', '116');"><nobr>Société</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_Exp1AssistPrefixe', 'Entreprise', 'listeExp1AssistPrefixe');appliqueFormules('Exp1AssistPrefixe', '116');"><nobr>Entreprise</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_Exp1AssistPrefixe', 'Etablissement', 'listeExp1AssistPrefixe');appliqueFormules('Exp1AssistPrefixe', '116');"><nobr>Etablissement</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_Exp1AssistPrefixe', 'Administration', 'listeExp1AssistPrefixe');appliqueFormules('Exp1AssistPrefixe', '116');"><nobr>Administration</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_Exp1AssistPrefixe', 'Cabinet', 'listeExp1AssistPrefixe');appliqueFormules('Exp1AssistPrefixe', '116');"><nobr>Cabinet</nobr></div>
</div>
</td>
<input id='ChampsOnglet_Exp1AssistPrenom' name='Exp1AssistPrenom' value="" type='hidden'>
</table></td></tr>
</table>
<table id='Onglet2TableNumero33' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:377.66666666667px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet2TableNumero33SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_Exp1AssistTel' class='CelLib' style='width:528.33px;'>
Tél.
</td>
<td id='cellule_attr_Exp1AssistTel' data-tableau='Onglet2TableNumero33' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_Exp1AssistTel' style='border:1px inset #C1C1C1;  ' onMouseOver="javascript:changeZindexManuel('Onglet2TableNumero33', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet2TableNumero33', '');" >
<input  class='champs' id='ChampsOnglet_Exp1AssistTel' name='Exp1AssistTel' autocomplete='off' value="" type='text' style='width:97.5px;border-width:0px; '  onBlur="javascript:appliqueFormules('Exp1AssistTel', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
<td id='cellule_lib_Exp1AssistTeP' class='CelLib' style='padding-left:10px; width:38.83px;'>
Tél.P
</td>
<td id='cellule_attr_Exp1AssistTeP' data-tableau='Onglet2TableNumero33' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_Exp1AssistTeP' style='border:1px inset #C1C1C1;  ' onMouseOver="javascript:changeZindexManuel('Onglet2TableNumero33', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet2TableNumero33', '');" >
<input  class='champs' id='ChampsOnglet_Exp1AssistTeP' name='Exp1AssistTeP' autocomplete='off' value="" type='text' style='width:97.5px;border-width:0px; '  onBlur="javascript:appliqueFormules('Exp1AssistTeP', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
</table></td></tr>
</table>
<table id='Onglet2TableNumero34' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:404.33333333333px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet2TableNumero34SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_Exp1AssistEmail' class='CelLib' style='width:528.33px;'>
Email
</td>
<td id='cellule_attr_Exp1AssistEmail' data-tableau='Onglet2TableNumero34' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_Exp1AssistEmail' style='border:1px inset #C1C1C1;  ' onMouseOver="javascript:changeZindexManuel('Onglet2TableNumero34', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet2TableNumero34', '');" >
<input  class='champs' id='ChampsOnglet_Exp1AssistEmail' name='Exp1AssistEmail' autocomplete='off' value="" type='text' style='width:214.5px;border-width:0px; '  onBlur="javascript:appliqueFormules('Exp1AssistEmail', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
<td id='cellule_lib_BoutCreerExpert1' class='CelLib' style='padding-left:10px; width:-2px;'>

</td>
<td id='cellule_bouton_BoutCreerExpert1' style='vertical-align:top;'>
<input type='button' data-ident='' value="Créer l'expert"  style="" onClick="javascript:ClickBoutonGeneInstance('UP_Experts', 'Exp1RaisonSociale>RaisonSociale;Exp1Reference>Reference;Exp1NomPrenom>NomPrenom;Exp1Prefixe>Prefixe;Exp1Prenom>Prenom;Exp1Adresse1>Adresse1;Exp1Adresse2>Adresse2;Exp1Adresse3>Adresse3;Exp1CP>CP;Exp1Ville>Ville;Exp1Tel>Tel;Exp1TeP>TeP;Exp1Email>Email;Exp1CResponsable>CResponsable;Exp1CPrefixe>CPrefixe;Exp1Sigle>Sigle;Exp1AccordCadre>AccordCadre;Exp1AssistNomPrenom>AssistNomPrenom;Exp1AssistPrefixe>AssistPrefixe;Exp1AssistPrenom>AssistPrenom;Exp1AssistTel>AssistTel;Exp1AssistTeP>AssistTeP;Exp1AssistEmail>AssistEmail;Exp1RedevanceCom>RedevanceCom;Exp1Comment>Note', 'Exp1Id', 'Id', 'Experts Cie/Mut', 'Id expert Cie/Mut', '', '', '', false); return false;"></td>
</table></td></tr>
</table>
<table id='Onglet2TableNumero35' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:432.66666666667px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;' id='table_etiquette_Exp2RaisonSociale'>
<td style='padding-right:5px;  width:528.33px;'>
</td>
<td style='padding-bottom:10px;'>
<div class='etiquette' style='color:#FFFFFF;  width:140px; '>
<nobr>Expert Assuré</nobr>
</div>
</td>
</table>
</td>
</tr>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet2TableNumero35SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_Exp2RaisonSociale' class='CelLib' style='width:528.33px;'>
Cabinet d'expertise
</td>
<td id='cellule_attr_Exp2RaisonSociale' data-tableau='Onglet2TableNumero35' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_Exp2RaisonSociale' style='border:1px inset #C1C1C1;  ' onMouseOver="javascript:changeZindexManuel('Onglet2TableNumero35', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet2TableNumero35', '');" >
<input  class='champs' id='ChampsOnglet_Exp2RaisonSociale' name='Exp2RaisonSociale' autocomplete='off' value="" type='text' style='width:214.5px;border-width:0px; '  onBlur="javascript:appliqueFormules('Exp2RaisonSociale', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
<td id='cellule_attr_Exp2CabExpertiseId' data-tableau='Onglet2TableNumero35' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_Exp2CabExpertiseId' style='border:1px solid #646464;  ' onMouseOver="javascript:changeZindexManuel('Onglet2TableNumero35', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet2TableNumero35', '');" onDblClick="javascript:RechOuvertureDist('UP_CabinetsExpertise', 'Id', 'Exp2CabExpertiseId', 'Exp2CabExpertiseId');">
<input  class='champs' id='ChampsOnglet_Exp2CabExpertiseId' name='Exp2CabExpertiseId' autocomplete='off' value="" type='text' style='width:32.5px;border-width:0px; '  onBlur="javascript:appliqueFormules('Exp2CabExpertiseId', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
<td id='cellule_bouton_Exp2CabExpertiseId' style='vertical-align:top;'>
<input type='button' data-ident='' value=""  style="background:#ffffff url('images/icone_Dico.jpg') no-repeat top left; height:19px;  width:19px;  border-width:1px; cursor:pointer;" onClick="javascript:AfficheSuperDico('Exp2CabExpertiseId', 'UP_CabinetsExpertise', 'Id>Exp2CabExpertiseId;RaisonSociale>Exp2RaisonSociale;Adresse1>Exp2Adresse1;Adresse2>Exp2Adresse2;Adresse3>Exp2Adresse3;CP>Exp2CP;Ville>Exp2Ville;CResponsable>Exp2CabExpertiseCResponsable;CPrefixe>Exp2CabExpertiseCPrefixe;Sigle>Exp2CabExpertiseSigle', '', '', '', '', false, false); return false;"><input type='button' data-ident='' value=""  style="background:#ffffff url('images/icone_chercher.gif') no-repeat top left; height:19px;  width:19px;  border-width:1px; cursor:pointer;" onClick="javascript:AfficheSuperDicoRechercher('UP_CabinetsExpertise', 'Id>Exp2CabExpertiseId;RaisonSociale>Exp2RaisonSociale;Adresse1>Exp2Adresse1;Adresse2>Exp2Adresse2;Adresse3>Exp2Adresse3;CP>Exp2CP;Ville>Exp2Ville;CResponsable>Exp2CabExpertiseCResponsable;CPrefixe>Exp2CabExpertiseCPrefixe;Sigle>Exp2CabExpertiseSigle', 'RaisonSociale', 'Rechercher un texte dans les noms des cabinets dCoTeexpertise', '', '', 'Exp2RaisonSociale', false, 'Exp2CabExpertiseId'); return false;"></td>
</table></td></tr>
</table>
<table id='Onglet2TableNumero36' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:499.33333333333px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet2TableNumero36SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_Exp2CabExpertiseCResponsable' class='CelLib' style='width:528.33px;'>
Resp. UP Cabinet
</td>
<td id='cellule_attr_Exp2CabExpertiseCResponsable' data-tableau='Onglet2TableNumero36' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_Exp2CabExpertiseCResponsable' style='border:1px inset #C1C1C1;  ' onMouseOver="javascript:changeZindexManuel('Onglet2TableNumero36', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet2TableNumero36', '');">
<input class='champs' autocomplete='off' id='ChampsOnglet_Exp2CabExpertiseCResponsable' name='Exp2CabExpertiseCResponsable' value="" type='text' style=' width:100px;border-width:0px; '  onBlur="javascript:appliqueFormules('Exp2CabExpertiseCResponsable', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"><img id='Image_Exp2CabExpertiseCResponsable' src='images/2016/bouton_bas.png' alt='' class='BoutDico' onClick="javascript:nePasChangerZindex('Onglet2TableNumero36', 'menu'); afficheCacheMenuDeroulant('listeExp2CabExpertiseCResponsable', 'ChampsOnglet_Exp2CabExpertiseCResponsable', 'Onglet2TableNumero36');" onMouseDown="javascript:this.src='images/2016/bouton_bas_click.png';" onMouseUp="javascript:this.src='images/2016/bouton_bas.png';">
</div>
<div id='listeExp2CabExpertiseCResponsable' style=' overflow-y:auto;overflow-x:hidden;position:fixed;display:none;z-index:5000;border:1px solid #C1C1C1;min-width:113px;background-color:#ffffff;padding:2;' onMouseOver="javascript:cacherMenuDeroulant = false;" onMouseOut="javascript:cacherMenuDeroulant = true;">
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_Exp2CabExpertiseCResponsable', '', 'listeExp2CabExpertiseCResponsable');appliqueFormules('Exp2CabExpertiseCResponsable', '116');"><nobr>&nbsp;</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_Exp2CabExpertiseCResponsable', 'Berthier Fabien', 'listeExp2CabExpertiseCResponsable');appliqueFormules('Exp2CabExpertiseCResponsable', '116');"><nobr>Berthier Fabien</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_Exp2CabExpertiseCResponsable', 'CANCELA', 'listeExp2CabExpertiseCResponsable');appliqueFormules('Exp2CabExpertiseCResponsable', '116');"><nobr>CANCELA</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_Exp2CabExpertiseCResponsable', 'CONDAMINES Caroline', 'listeExp2CabExpertiseCResponsable');appliqueFormules('Exp2CabExpertiseCResponsable', '116');"><nobr>CONDAMINES Caroline</nobr></div>
</div>
</td>
<input id='ChampsOnglet_Exp2CabExpertiseCPrefixe' name='Exp2CabExpertiseCPrefixe' value="" type='hidden'>
<input id='ChampsOnglet_Exp2CabExpertiseSigle' name='Exp2CabExpertiseSigle' value="" type='hidden'>
</table></td></tr>
</table>
<table id='Onglet2TableNumero37' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:526px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet2TableNumero37SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_Exp2NomPrenom' class='CelLib' style='width:528.33px;'>
Nom
</td>
<td id='cellule_attr_Exp2NomPrenom' data-tableau='Onglet2TableNumero37' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_Exp2NomPrenom' style='border:1px inset #C1C1C1;  ' onMouseOver="javascript:changeZindexManuel('Onglet2TableNumero37', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet2TableNumero37', '');" >
<input  class='champs' id='ChampsOnglet_Exp2NomPrenom' name='Exp2NomPrenom' autocomplete='off' value="" type='text' style='width:214.5px;border-width:0px; '  onBlur="javascript:appliqueFormules('Exp2NomPrenom', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
<td id='cellule_attr_Exp2Id' data-tableau='Onglet2TableNumero37' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_Exp2Id' style='border:1px solid #646464;  ' onMouseOver="javascript:changeZindexManuel('Onglet2TableNumero37', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet2TableNumero37', '');" onDblClick="javascript:RechOuvertureDist('UP_Experts', 'Id', 'Exp2Id', 'Exp2Id');">
<input  class='champs' id='ChampsOnglet_Exp2Id' name='Exp2Id' autocomplete='off' value="" type='text' style='width:32.5px;border-width:0px; '  onBlur="javascript:appliqueFormules('Exp2Id', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
<td id='cellule_bouton_Exp2Id' style='vertical-align:top;'>
<input type='button' data-ident='' value=""  style="background:#ffffff url('images/icone_Dico.jpg') no-repeat top left; height:19px;  width:19px;  border-width:1px; cursor:pointer;" onClick="javascript:AfficheSuperDico('Exp2Id', 'UP_ExpertsAssure', 'Id>Exp2Id;RaisonSociale>Exp2RaisonSociale;Reference>Exp2Reference;CabExpertiseId>Exp2CabExpertiseId;CabExpertiseCResponsable>Exp2CabExpertiseCResponsable;CabExpertiseCPrefixe>Exp2CabExpertiseCPrefixe;CabExpertiseSigle>Exp2CabExpertiseSigle;NomPrenom>Exp2NomPrenom;Prefixe>Exp2Prefixe;Prenom>Exp2Prenom;Adresse1>Exp2Adresse1;Adresse2>Exp2Adresse2;Adresse3>Exp2Adresse3;CP>Exp2CP;Ville>Exp2Ville;Tel>Exp2Tel;TeP>Exp2TeP;Email>Exp2Email;CResponsable>Exp2CResponsable;CPrefixe>Exp2CPrefixe;Sigle>Exp2Sigle;AccordCadre>Exp2AccordCadre;AssistNomPrenom>Exp2AssistNomPrenom;AssistPrefixe>Exp2AssistPrefixe;AssistPrenom>Exp2AssistPrenom;AssistTel>Exp2AssistTel;AssistTeP>Exp2AssistTeP;AssistEmail>Exp2AssistEmail;RedevanceCom>Exp2RedevanceCom;Note>Exp2Comment', '', '', '', '', false, false); return false;"><input type='button' data-ident='' value=""  style="background:#ffffff url('images/icone_chercher.gif') no-repeat top left; height:19px;  width:19px;  border-width:1px; cursor:pointer;" onClick="javascript:AfficheSuperDicoRechercher('UP_ExpertsAssure', 'Id>Exp2Id;RaisonSociale>Exp2RaisonSociale;Reference>Exp2Reference;CabExpertiseId>Exp2CabExpertiseId;CabExpertiseCResponsable>Exp2CabExpertiseCResponsable;CabExpertiseCPrefixe>Exp2CabExpertiseCPrefixe;CabExpertiseSigle>Exp2CabExpertiseSigle;NomPrenom>Exp2NomPrenom;Prefixe>Exp2Prefixe;Prenom>Exp2Prenom;Adresse1>Exp2Adresse1;Adresse2>Exp2Adresse2;Adresse3>Exp2Adresse3;CP>Exp2CP;Ville>Exp2Ville;Tel>Exp2Tel;TeP>Exp2TeP;Email>Exp2Email;CResponsable>Exp2CResponsable;CPrefixe>Exp2CPrefixe;Sigle>Exp2Sigle;AccordCadre>Exp2AccordCadre;AssistNomPrenom>Exp2AssistNomPrenom;AssistPrefixe>Exp2AssistPrefixe;AssistPrenom>Exp2AssistPrenom;AssistTel>Exp2AssistTel;AssistTeP>Exp2AssistTeP;AssistEmail>Exp2AssistEmail;RedevanceCom>Exp2RedevanceCom;Note>Exp2Comment', 'NomPrenom', 'Rechercher un texte dans les noms des experts', '', '', 'Exp2NomPrenom', false, 'Exp2Id'); return false;"></td>
<td id='cellule_lib_Exp2Prefixe' class='CelLib' style='padding-left:10px; width:-2px;'>

</td>
<td id='cellule_attr_Exp2Prefixe' data-tableau='Onglet2TableNumero37' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_Exp2Prefixe' style='border:1px inset #C1C1C1;  ' onMouseOver="javascript:changeZindexManuel('Onglet2TableNumero37', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet2TableNumero37', '');">
<input class='champs' autocomplete='off' id='ChampsOnglet_Exp2Prefixe' name='Exp2Prefixe' value="" type='text' style=' width:35px;border-width:0px; '  onBlur="javascript:appliqueFormules('Exp2Prefixe', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"><img id='Image_Exp2Prefixe' src='images/2016/bouton_bas.png' alt='' class='BoutDico' onClick="javascript:nePasChangerZindex('Onglet2TableNumero37', 'menu'); afficheCacheMenuDeroulant('listeExp2Prefixe', 'ChampsOnglet_Exp2Prefixe', 'Onglet2TableNumero37');" onMouseDown="javascript:this.src='images/2016/bouton_bas_click.png';" onMouseUp="javascript:this.src='images/2016/bouton_bas.png';">
</div>
<div id='listeExp2Prefixe' style='height:110px; overflow-y:auto;overflow-x:hidden;position:fixed;display:none;z-index:5000;border:1px solid #C1C1C1;min-width:48px;background-color:#ffffff;padding:2;' onMouseOver="javascript:cacherMenuDeroulant = false;" onMouseOut="javascript:cacherMenuDeroulant = true;">
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_Exp2Prefixe', 'M.', 'listeExp2Prefixe');appliqueFormules('Exp2Prefixe', '116');"><nobr>M.</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_Exp2Prefixe', 'Mme', 'listeExp2Prefixe');appliqueFormules('Exp2Prefixe', '116');"><nobr>Mme</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_Exp2Prefixe', 'Melle', 'listeExp2Prefixe');appliqueFormules('Exp2Prefixe', '116');"><nobr>Melle</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_Exp2Prefixe', 'M & Mme', 'listeExp2Prefixe');appliqueFormules('Exp2Prefixe', '116');"><nobr>M & Mme</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_Exp2Prefixe', 'M & M', 'listeExp2Prefixe');appliqueFormules('Exp2Prefixe', '116');"><nobr>M & M</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_Exp2Prefixe', 'Mme & Mme', 'listeExp2Prefixe');appliqueFormules('Exp2Prefixe', '116');"><nobr>Mme & Mme</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_Exp2Prefixe', 'Melle & Melle', 'listeExp2Prefixe');appliqueFormules('Exp2Prefixe', '116');"><nobr>Melle & Melle</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_Exp2Prefixe', 'SA', 'listeExp2Prefixe');appliqueFormules('Exp2Prefixe', '116');"><nobr>SA</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_Exp2Prefixe', 'SARL', 'listeExp2Prefixe');appliqueFormules('Exp2Prefixe', '116');"><nobr>SARL</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_Exp2Prefixe', 'SAS', 'listeExp2Prefixe');appliqueFormules('Exp2Prefixe', '116');"><nobr>SAS</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_Exp2Prefixe', 'EURL', 'listeExp2Prefixe');appliqueFormules('Exp2Prefixe', '116');"><nobr>EURL</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_Exp2Prefixe', 'Société', 'listeExp2Prefixe');appliqueFormules('Exp2Prefixe', '116');"><nobr>Société</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_Exp2Prefixe', 'Entreprise', 'listeExp2Prefixe');appliqueFormules('Exp2Prefixe', '116');"><nobr>Entreprise</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_Exp2Prefixe', 'Etablissement', 'listeExp2Prefixe');appliqueFormules('Exp2Prefixe', '116');"><nobr>Etablissement</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_Exp2Prefixe', 'Administration', 'listeExp2Prefixe');appliqueFormules('Exp2Prefixe', '116');"><nobr>Administration</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_Exp2Prefixe', 'Cabinet', 'listeExp2Prefixe');appliqueFormules('Exp2Prefixe', '116');"><nobr>Cabinet</nobr></div>
</div>
</td>
</table></td></tr>
</table>
<table id='Onglet2TableNumero38' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:552.66666666667px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet2TableNumero38SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_Exp2Reference' class='CelLib' style='width:528.33px;'>
Réf. Expert
</td>
<td id='cellule_attr_Exp2Reference' data-tableau='Onglet2TableNumero38' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_Exp2Reference' style='border:1px inset #C1C1C1;  ' onMouseOver="javascript:changeZindexManuel('Onglet2TableNumero38', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet2TableNumero38', '');" >
<input  class='champs' id='ChampsOnglet_Exp2Reference' name='Exp2Reference' autocomplete='off' value="" type='text' style='width:65px;border-width:0px; '  onBlur="javascript:appliqueFormules('Exp2Reference', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
<input id='ChampsOnglet_Exp2Prenom' name='Exp2Prenom' value="" type='hidden'>
<input id='ChampsOnglet_Exp2Adresse1' name='Exp2Adresse1' value="" type='hidden'>
<input id='ChampsOnglet_Exp2Adresse2' name='Exp2Adresse2' value="" type='hidden'>
<input id='ChampsOnglet_Exp2Adresse3' name='Exp2Adresse3' value="" type='hidden'>
<input id='ChampsOnglet_Exp2CP' name='Exp2CP' value="" type='hidden'>
<input id='ChampsOnglet_Exp2Ville' name='Exp2Ville' value="" type='hidden'>
</table></td></tr>
</table>
<table id='Onglet2TableNumero39' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:579.33333333333px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet2TableNumero39SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_Exp2Tel' class='CelLib' style='width:528.33px;'>
Tél.
</td>
<td id='cellule_attr_Exp2Tel' data-tableau='Onglet2TableNumero39' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_Exp2Tel' style='border:1px inset #C1C1C1;  ' onMouseOver="javascript:changeZindexManuel('Onglet2TableNumero39', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet2TableNumero39', '');" >
<input  class='champs' id='ChampsOnglet_Exp2Tel' name='Exp2Tel' autocomplete='off' value="" type='text' style='width:97.5px;border-width:0px; '  onBlur="javascript:appliqueFormules('Exp2Tel', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
<td id='cellule_lib_Exp2TeP' class='CelLib' style='padding-left:10px; width:38.83px;'>
Tél.P
</td>
<td id='cellule_attr_Exp2TeP' data-tableau='Onglet2TableNumero39' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_Exp2TeP' style='border:1px inset #C1C1C1;  ' onMouseOver="javascript:changeZindexManuel('Onglet2TableNumero39', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet2TableNumero39', '');" >
<input  class='champs' id='ChampsOnglet_Exp2TeP' name='Exp2TeP' autocomplete='off' value="" type='text' style='width:97.5px;border-width:0px; '  onBlur="javascript:appliqueFormules('Exp2TeP', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
</table></td></tr>
</table>
<table id='Onglet2TableNumero40' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:606px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet2TableNumero40SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_Exp2Email' class='CelLib' style='width:528.33px;'>
Email
</td>
<td id='cellule_attr_Exp2Email' data-tableau='Onglet2TableNumero40' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_Exp2Email' style='border:1px inset #C1C1C1;  ' onMouseOver="javascript:changeZindexManuel('Onglet2TableNumero40', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet2TableNumero40', '');" >
<input  class='champs' id='ChampsOnglet_Exp2Email' name='Exp2Email' autocomplete='off' value="" type='text' style='width:214.5px;border-width:0px; '  onBlur="javascript:appliqueFormules('Exp2Email', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
</table></td></tr>
</table>
<table id='Onglet2TableNumero41' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:632.66666666667px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet2TableNumero41SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_Exp2CResponsable' class='CelLib' style='width:528.33px;'>
Resp. compte UP
</td>
<td id='cellule_attr_Exp2CResponsable' data-tableau='Onglet2TableNumero41' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_Exp2CResponsable' style='border:1px inset #C1C1C1;  ' onMouseOver="javascript:changeZindexManuel('Onglet2TableNumero41', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet2TableNumero41', '');">
<input class='champs' autocomplete='off' id='ChampsOnglet_Exp2CResponsable' name='Exp2CResponsable' value="" type='text' style=' width:100px;border-width:0px; '  onBlur="javascript:appliqueFormules('Exp2CResponsable', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"><img id='Image_Exp2CResponsable' src='images/2016/bouton_bas.png' alt='' class='BoutDico' onClick="javascript:nePasChangerZindex('Onglet2TableNumero41', 'menu'); afficheCacheMenuDeroulant('listeExp2CResponsable', 'ChampsOnglet_Exp2CResponsable', 'Onglet2TableNumero41');" onMouseDown="javascript:this.src='images/2016/bouton_bas_click.png';" onMouseUp="javascript:this.src='images/2016/bouton_bas.png';">
</div>
<div id='listeExp2CResponsable' style=' overflow-y:auto;overflow-x:hidden;position:fixed;display:none;z-index:5000;border:1px solid #C1C1C1;min-width:113px;background-color:#ffffff;padding:2;' onMouseOver="javascript:cacherMenuDeroulant = false;" onMouseOut="javascript:cacherMenuDeroulant = true;">
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_Exp2CResponsable', '', 'listeExp2CResponsable');appliqueFormules('Exp2CResponsable', '116');"><nobr>&nbsp;</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_Exp2CResponsable', 'Berthier Fabien', 'listeExp2CResponsable');appliqueFormules('Exp2CResponsable', '116');"><nobr>Berthier Fabien</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_Exp2CResponsable', 'CANCELA', 'listeExp2CResponsable');appliqueFormules('Exp2CResponsable', '116');"><nobr>CANCELA</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_Exp2CResponsable', 'CONDAMINES Caroline', 'listeExp2CResponsable');appliqueFormules('Exp2CResponsable', '116');"><nobr>CONDAMINES Caroline</nobr></div>
</div>
</td>
<input id='ChampsOnglet_Exp2CPrefixe' name='Exp2CPrefixe' value="" type='hidden'>
<input id='ChampsOnglet_Exp2Sigle' name='Exp2Sigle' value="" type='hidden'>
</table></td></tr>
</table>
<table id='Onglet2TableNumero42' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:659.33333333333px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet2TableNumero42SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_Exp2AccordCadre' class='CelLib' style='width:528.33px;'>
Accord Cadre
</td>
<td id='cellule_attr_Exp2AccordCadre' data-tableau='Onglet2TableNumero42' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_Exp2AccordCadre' style='border:1px inset #C1C1C1;  ' onMouseOver="javascript:changeZindexManuel('Onglet2TableNumero42', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet2TableNumero42', '');">
<input class='champs' autocomplete='off' id='ChampsOnglet_Exp2AccordCadre' name='Exp2AccordCadre' value="" type='text' style='z-index:5;  width:22px;border-width:0px; ' readOnly='readOnly' onFocus="javascript:select(); valeurInputEnCours=this.value;"><img id='Image_Exp2AccordCadre' src='images/2016/bouton_bas.png' alt='' class='BoutDico' onClick="javascript:nePasChangerZindex('Onglet2TableNumero42', 'menu'); afficheCacheMenuDeroulant('listeExp2AccordCadre', 'ChampsOnglet_Exp2AccordCadre', 'Onglet2TableNumero42');" onMouseDown="javascript:this.src='images/2016/bouton_bas_click.png';" onMouseUp="javascript:this.src='images/2016/bouton_bas.png';">
</div>
<div id='listeExp2AccordCadre' style=' overflow-y:auto;overflow-x:hidden;position:fixed;display:none;z-index:5000;border:1px solid #C1C1C1;min-width:35px;background-color:#ffffff;padding:2;' onMouseOver="javascript:cacherMenuDeroulant = false;" onMouseOut="javascript:cacherMenuDeroulant = true;">
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_Exp2AccordCadre', '', 'listeExp2AccordCadre');appliqueFormules('Exp2AccordCadre', '116');"><nobr>&nbsp;</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_Exp2AccordCadre', 'OUI', 'listeExp2AccordCadre');appliqueFormules('Exp2AccordCadre', '116');"><nobr>OUI</nobr></div>
</div>
</td>
<td id='cellule_lib_Exp2RedevanceCom' class='CelLib' style='padding-left:10px; width:97.33px;'>
Redevance comm.
</td>
<td id='cellule_attr_Exp2RedevanceCom' data-tableau='Onglet2TableNumero42' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_Exp2RedevanceCom' style='border:1px inset #C1C1C1;  ' onMouseOver="javascript:changeZindexManuel('Onglet2TableNumero42', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet2TableNumero42', '');">
<input class='champs' autocomplete='off' id='ChampsOnglet_Exp2RedevanceCom' name='Exp2RedevanceCom' value="0" type='text' style='width:39px;border-width:0px; text-align:right; '  onBlur="javascript:appliqueFormules('Exp2RedevanceCom', '116');" onKeyDown="javascript:onKeyDownNumerique(this);" onKeyUp="javascript:onKeyUpNumerique(this);" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
<td id='cellule_unite_Exp2RedevanceCom' class='CelUnite' style='width:7px;'>
<nobr>%</nobr>
</td>
</table></td></tr>
</table>
<table id='Onglet2TableNumero43' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:686px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet2TableNumero43SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_Exp2Comment' class='CelLib' style='width:528.33px;'>
Commentaire
</td>
<td id='cellule_attr_Exp2Comment' data-tableau='Onglet2TableNumero43' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_Exp2Comment' style=' border:1px inset #C1C1C1;  ' onMouseOver="javascript:changeZindexManuel('Onglet2TableNumero43', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet2TableNumero43', '');">
<textarea class='champs' id='ChampsOnglet_Exp2Comment' data-type='TEXT2' name='Exp2Comment' style='width:195px; height:40px; border-width:0px; '  onBlur="javascript:appliqueFormules('Exp2Comment', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;">
</textarea>
</div>
</td>
</table></td></tr>
</table>
<table id='Onglet2TableNumero44' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:737.66666666667px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet2TableNumero44SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_leg_coord_assist_expert2' class='CelLib' style='width:528.33px;'>

</td>
<td id='cellule_attr_leg_coord_assist_expert2' data-tableau='Onglet2TableNumero44' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_leg_coord_assist_expert2' style='border:1px solid transparent; background-color:transparent; overflow:hidden; height:16px;   cursor:default;' onMouseOver="javascript:changeZindexManuel('Onglet2TableNumero44', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet2TableNumero44', '');" >
<div id='div_champs_non_modif_leg_coord_assist_expert2' style='width:195px;'></div>
</div>
</td>
</table></td></tr>
</table>
<table id='Onglet2TableNumero45' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:764.33333333333px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet2TableNumero45SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_Exp2AssistNomPrenom' class='CelLib' style='width:528.33px;'>
Nom
</td>
<td id='cellule_attr_Exp2AssistNomPrenom' data-tableau='Onglet2TableNumero45' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_Exp2AssistNomPrenom' style='border:1px inset #C1C1C1;  ' onMouseOver="javascript:changeZindexManuel('Onglet2TableNumero45', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet2TableNumero45', '');" >
<input  class='champs' id='ChampsOnglet_Exp2AssistNomPrenom' name='Exp2AssistNomPrenom' autocomplete='off' value="" type='text' style='width:214.5px;border-width:0px; '  onBlur="javascript:appliqueFormules('Exp2AssistNomPrenom', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
<td id='cellule_lib_Exp2AssistPrefixe' class='CelLib' style='padding-left:10px; width:-2px;'>

</td>
<td id='cellule_attr_Exp2AssistPrefixe' data-tableau='Onglet2TableNumero45' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_Exp2AssistPrefixe' style='border:1px inset #C1C1C1;  ' onMouseOver="javascript:changeZindexManuel('Onglet2TableNumero45', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet2TableNumero45', '');">
<input class='champs' autocomplete='off' id='ChampsOnglet_Exp2AssistPrefixe' name='Exp2AssistPrefixe' value="" type='text' style=' width:35px;border-width:0px; '  onBlur="javascript:appliqueFormules('Exp2AssistPrefixe', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"><img id='Image_Exp2AssistPrefixe' src='images/2016/bouton_bas.png' alt='' class='BoutDico' onClick="javascript:nePasChangerZindex('Onglet2TableNumero45', 'menu'); afficheCacheMenuDeroulant('listeExp2AssistPrefixe', 'ChampsOnglet_Exp2AssistPrefixe', 'Onglet2TableNumero45');" onMouseDown="javascript:this.src='images/2016/bouton_bas_click.png';" onMouseUp="javascript:this.src='images/2016/bouton_bas.png';">
</div>
<div id='listeExp2AssistPrefixe' style='height:110px; overflow-y:auto;overflow-x:hidden;position:fixed;display:none;z-index:5000;border:1px solid #C1C1C1;min-width:48px;background-color:#ffffff;padding:2;' onMouseOver="javascript:cacherMenuDeroulant = false;" onMouseOut="javascript:cacherMenuDeroulant = true;">
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_Exp2AssistPrefixe', 'M.', 'listeExp2AssistPrefixe');appliqueFormules('Exp2AssistPrefixe', '116');"><nobr>M.</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_Exp2AssistPrefixe', 'Mme', 'listeExp2AssistPrefixe');appliqueFormules('Exp2AssistPrefixe', '116');"><nobr>Mme</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_Exp2AssistPrefixe', 'Melle', 'listeExp2AssistPrefixe');appliqueFormules('Exp2AssistPrefixe', '116');"><nobr>Melle</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_Exp2AssistPrefixe', 'M & Mme', 'listeExp2AssistPrefixe');appliqueFormules('Exp2AssistPrefixe', '116');"><nobr>M & Mme</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_Exp2AssistPrefixe', 'M & M', 'listeExp2AssistPrefixe');appliqueFormules('Exp2AssistPrefixe', '116');"><nobr>M & M</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_Exp2AssistPrefixe', 'Mme & Mme', 'listeExp2AssistPrefixe');appliqueFormules('Exp2AssistPrefixe', '116');"><nobr>Mme & Mme</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_Exp2AssistPrefixe', 'Melle & Melle', 'listeExp2AssistPrefixe');appliqueFormules('Exp2AssistPrefixe', '116');"><nobr>Melle & Melle</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_Exp2AssistPrefixe', 'SA', 'listeExp2AssistPrefixe');appliqueFormules('Exp2AssistPrefixe', '116');"><nobr>SA</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_Exp2AssistPrefixe', 'SARL', 'listeExp2AssistPrefixe');appliqueFormules('Exp2AssistPrefixe', '116');"><nobr>SARL</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_Exp2AssistPrefixe', 'SAS', 'listeExp2AssistPrefixe');appliqueFormules('Exp2AssistPrefixe', '116');"><nobr>SAS</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_Exp2AssistPrefixe', 'EURL', 'listeExp2AssistPrefixe');appliqueFormules('Exp2AssistPrefixe', '116');"><nobr>EURL</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_Exp2AssistPrefixe', 'Société', 'listeExp2AssistPrefixe');appliqueFormules('Exp2AssistPrefixe', '116');"><nobr>Société</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_Exp2AssistPrefixe', 'Entreprise', 'listeExp2AssistPrefixe');appliqueFormules('Exp2AssistPrefixe', '116');"><nobr>Entreprise</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_Exp2AssistPrefixe', 'Etablissement', 'listeExp2AssistPrefixe');appliqueFormules('Exp2AssistPrefixe', '116');"><nobr>Etablissement</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_Exp2AssistPrefixe', 'Administration', 'listeExp2AssistPrefixe');appliqueFormules('Exp2AssistPrefixe', '116');"><nobr>Administration</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_Exp2AssistPrefixe', 'Cabinet', 'listeExp2AssistPrefixe');appliqueFormules('Exp2AssistPrefixe', '116');"><nobr>Cabinet</nobr></div>
</div>
</td>
<input id='ChampsOnglet_Exp2AssistPrenom' name='Exp2AssistPrenom' value="" type='hidden'>
</table></td></tr>
</table>
<table id='Onglet2TableNumero46' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:791px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet2TableNumero46SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_Exp2AssistTel' class='CelLib' style='width:528.33px;'>
Tél.
</td>
<td id='cellule_attr_Exp2AssistTel' data-tableau='Onglet2TableNumero46' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_Exp2AssistTel' style='border:1px inset #C1C1C1;  ' onMouseOver="javascript:changeZindexManuel('Onglet2TableNumero46', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet2TableNumero46', '');" >
<input  class='champs' id='ChampsOnglet_Exp2AssistTel' name='Exp2AssistTel' autocomplete='off' value="" type='text' style='width:97.5px;border-width:0px; '  onBlur="javascript:appliqueFormules('Exp2AssistTel', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
<td id='cellule_lib_Exp2AssistTeP' class='CelLib' style='padding-left:10px; width:38.83px;'>
Tél.P
</td>
<td id='cellule_attr_Exp2AssistTeP' data-tableau='Onglet2TableNumero46' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_Exp2AssistTeP' style='border:1px inset #C1C1C1;  ' onMouseOver="javascript:changeZindexManuel('Onglet2TableNumero46', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet2TableNumero46', '');" >
<input  class='champs' id='ChampsOnglet_Exp2AssistTeP' name='Exp2AssistTeP' autocomplete='off' value="" type='text' style='width:97.5px;border-width:0px; '  onBlur="javascript:appliqueFormules('Exp2AssistTeP', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
</table></td></tr>
</table>
<table id='Onglet2TableNumero47' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:817.66666666667px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet2TableNumero47SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_Exp2AssistEmail' class='CelLib' style='width:528.33px;'>
Email
</td>
<td id='cellule_attr_Exp2AssistEmail' data-tableau='Onglet2TableNumero47' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_Exp2AssistEmail' style='border:1px inset #C1C1C1;  ' onMouseOver="javascript:changeZindexManuel('Onglet2TableNumero47', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet2TableNumero47', '');" >
<input  class='champs' id='ChampsOnglet_Exp2AssistEmail' name='Exp2AssistEmail' autocomplete='off' value="" type='text' style='width:214.5px;border-width:0px; '  onBlur="javascript:appliqueFormules('Exp2AssistEmail', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
<td id='cellule_lib_BoutCreerExpert2' class='CelLib' style='padding-left:10px; width:-2px;'>

</td>
<td id='cellule_bouton_BoutCreerExpert2' style='vertical-align:top;'>
<input type='button' data-ident='' value="Créer l'expert"  style="" onClick="javascript:ClickBoutonGeneInstance('UP_ExpertsAssure', 'Exp2RaisonSociale>RaisonSociale;Exp2Reference>Reference;Exp2NomPrenom>NomPrenom;Exp2Prefixe>Prefixe;Exp2Prenom>Prenom;Exp2Adresse1>Adresse1;Exp2Adresse2>Adresse2;Exp2Adresse3>Adresse3;Exp2CP>CP;Exp2Ville>Ville;Exp2Tel>Tel;Exp2TeP>TeP;Exp2Email>Email;Exp2CResponsable>CResponsable;Exp2CPrefixe>CPrefixe;Exp2Sigle>Sigle;Exp2AccordCadre>AccordCadre;Exp2AssistNomPrenom>AssistNomPrenom;Exp2AssistPrefixe>AssistPrefixe;Exp2AssistPrenom>AssistPrenom;Exp2AssistTel>AssistTel;Exp2AssistTeP>AssistTeP;Exp2AssistEmail>AssistEmail;Exp2RedevanceCom>RedevanceCom;Exp2Comment>Note', 'Exp2Id', 'Id', 'Experts Assuré', 'Id expert Assuré', '', '', '', false); return false;"></td>
</table></td></tr>
</table>
<table id='Onglet2TableNumero48' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:19.333333333333px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;' id='table_etiquette_PlatefRaisonSociale'>
<td style='padding-right:5px;  width:961.67px;'>
</td>
<td style='padding-bottom:10px;'>
<div class='etiquette' style='color:#FFFFFF;  width:140px; '>
<nobr>Plateforme</nobr>
</div>
</td>
</table>
</td>
</tr>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet2TableNumero48SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_PlatefRaisonSociale' class='CelLib' style='width:961.67px;'>
Nom
</td>
<td id='cellule_attr_PlatefRaisonSociale' data-tableau='Onglet2TableNumero48' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_PlatefRaisonSociale' style='border:1px solid #646464;  ' onMouseOver="javascript:changeZindexManuel('Onglet2TableNumero48', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet2TableNumero48', '');" >
<input  class='champs' id='ChampsOnglet_PlatefRaisonSociale' name='PlatefRaisonSociale' autocomplete='off' value="" type='text' style='width:214.5px;border-width:0px; '  onBlur="javascript:appliqueFormules('PlatefRaisonSociale', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
<td id='cellule_attr_PlatefId' data-tableau='Onglet2TableNumero48' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_PlatefId' style='border:1px solid #646464;  ' onMouseOver="javascript:changeZindexManuel('Onglet2TableNumero48', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet2TableNumero48', '');" onDblClick="javascript:RechOuvertureDist('UP_Plateformes', 'Id', 'PlatefId', 'PlatefId');">
<input  class='champs' id='ChampsOnglet_PlatefId' name='PlatefId' autocomplete='off' value="" type='text' style='width:32.5px;border-width:0px; '  onBlur="javascript:appliqueFormules('PlatefId', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
<td id='cellule_bouton_PlatefId' style='vertical-align:top;'>
<input type='button' data-ident='' value=""  style="background:#ffffff url('images/icone_Dico.jpg') no-repeat top left; height:19px;  width:19px;  border-width:1px; cursor:pointer;" onClick="javascript:AfficheSuperDico('PlatefId', 'UP_Plateformes', 'Id>PlatefId;RaisonSociale>PlatefRaisonSociale;NomPrenom>PlatefNomPrenom;Prefixe>PlatefPrefixe;Prenom>PlatefPrenom;Adresse1>PlatefAdresse1;Adresse2>PlatefAdresse2;Adresse3>PlatefAdresse3;CP>PlatefCP;Ville>PlatefVille;Tel>PlatefTel;TeP>PlatefTeP;Email>PlatefEmail;CResponsable>PlatefCResponsable;CPrefixe>PlatefCPrefixe;Sigle>PlatefSigle;AccordCadre>PlatefAccordCadre;Note>PlatefComment;RedevanceCom>PlatefRedevanceCom;', '', '', '', '', false, false); return false;"><input type='button' data-ident='' value=""  style="background:#ffffff url('images/icone_chercher.gif') no-repeat top left; height:19px;  width:19px;  border-width:1px; cursor:pointer;" onClick="javascript:AfficheSuperDicoRechercher('UP_Plateformes', 'Id>PlatefId;RaisonSociale>PlatefRaisonSociale;NomPrenom>PlatefNomPrenom;Prefixe>PlatefPrefixe;Prenom>PlatefPrenom;Adresse1>PlatefAdresse1;Adresse2>PlatefAdresse2;Adresse3>PlatefAdresse3;CP>PlatefCP;Ville>PlatefVille;Tel>PlatefTel;TeP>PlatefTeP;Email>PlatefEmail;CResponsable>PlatefCResponsable;CPrefixe>PlatefCPrefixe;Sigle>PlatefSigle;AccordCadre>PlatefAccordCadre;Note>PlatefComment;RedevanceCom>PlatefRedevanceCom', 'RaisonSociale', 'Rechercher un texte dans les noms des plateformes', '', '', 'PlatefRaisonSociale', false, 'PlatefId'); return false;"></td>
<input id='ChampsOnglet_PlatefAdresse1' name='PlatefAdresse1' value="" type='hidden'>
<input id='ChampsOnglet_PlatefAdresse2' name='PlatefAdresse2' value="" type='hidden'>
<input id='ChampsOnglet_PlatefAdresse3' name='PlatefAdresse3' value="" type='hidden'>
<input id='ChampsOnglet_PlatefCP' name='PlatefCP' value="" type='hidden'>
<input id='ChampsOnglet_PlatefVille' name='PlatefVille' value="" type='hidden'>
<input id='ChampsOnglet_PlatefTel' name='PlatefTel' value="" type='hidden'>
<input id='ChampsOnglet_PlatefTeP' name='PlatefTeP' value="" type='hidden'>
</table></td></tr>
</table>
<table id='Onglet2TableNumero49' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:86px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet2TableNumero49SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_PlatefCResponsable' class='CelLib' style='width:961.67px;'>
Resp. UP Platef.
</td>
<td id='cellule_attr_PlatefCResponsable' data-tableau='Onglet2TableNumero49' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_PlatefCResponsable' style='border:1px solid #646464;  ' onMouseOver="javascript:changeZindexManuel('Onglet2TableNumero49', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet2TableNumero49', '');">
<input class='champs' autocomplete='off' id='ChampsOnglet_PlatefCResponsable' name='PlatefCResponsable' value="" type='text' style=' width:100px;border-width:0px; '  onBlur="javascript:appliqueFormules('PlatefCResponsable', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"><img id='Image_PlatefCResponsable' src='images/2016/bouton_bas.png' alt='' class='BoutDico' onClick="javascript:nePasChangerZindex('Onglet2TableNumero49', 'menu'); afficheCacheMenuDeroulant('listePlatefCResponsable', 'ChampsOnglet_PlatefCResponsable', 'Onglet2TableNumero49');" onMouseDown="javascript:this.src='images/2016/bouton_bas_click.png';" onMouseUp="javascript:this.src='images/2016/bouton_bas.png';">
</div>
<div id='listePlatefCResponsable' style=' overflow-y:auto;overflow-x:hidden;position:fixed;display:none;z-index:5000;border:1px solid #C1C1C1;min-width:113px;background-color:#ffffff;padding:2;' onMouseOver="javascript:cacherMenuDeroulant = false;" onMouseOut="javascript:cacherMenuDeroulant = true;">
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_PlatefCResponsable', '', 'listePlatefCResponsable');appliqueFormules('PlatefCResponsable', '116');"><nobr>&nbsp;</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_PlatefCResponsable', 'Berthier Fabien', 'listePlatefCResponsable');appliqueFormules('PlatefCResponsable', '116');"><nobr>Berthier Fabien</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_PlatefCResponsable', 'CANCELA', 'listePlatefCResponsable');appliqueFormules('PlatefCResponsable', '116');"><nobr>CANCELA</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_PlatefCResponsable', 'CONDAMINES Caroline', 'listePlatefCResponsable');appliqueFormules('PlatefCResponsable', '116');"><nobr>CONDAMINES Caroline</nobr></div>
</div>
</td>
<input id='ChampsOnglet_PlatefCPrefixe' name='PlatefCPrefixe' value="" type='hidden'>
<input id='ChampsOnglet_PlatefSigle' name='PlatefSigle' value="" type='hidden'>
<input id='ChampsOnglet_PlatefEmail' name='PlatefEmail' value="" type='hidden'>
</table></td></tr>
</table>
<table id='Onglet2TableNumero50' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:112.66666666667px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet2TableNumero50SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_PlatefComment' class='CelLib' style='width:961.67px;'>
Commentaire
</td>
<td id='cellule_attr_PlatefComment' data-tableau='Onglet2TableNumero50' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_PlatefComment' style=' border:1px solid #646464;  ' onMouseOver="javascript:changeZindexManuel('Onglet2TableNumero50', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet2TableNumero50', '');">
<textarea class='champs' id='ChampsOnglet_PlatefComment' data-type='TEXT2' name='PlatefComment' style='width:195px; height:60px; border-width:0px; '  onBlur="javascript:appliqueFormules('PlatefComment', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;">
</textarea>
</div>
</td>
</table></td></tr>
</table>
<table id='Onglet2TableNumero51' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:184.33333333333px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet2TableNumero51SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_PlatefAccordCadre' class='CelLib' style='width:961.67px;'>
Accord Cadre
</td>
<td id='cellule_attr_PlatefAccordCadre' data-tableau='Onglet2TableNumero51' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_PlatefAccordCadre' style='border:1px solid #646464;  ' onMouseOver="javascript:changeZindexManuel('Onglet2TableNumero51', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet2TableNumero51', '');" >
<input  class='champs' id='ChampsOnglet_PlatefAccordCadre' name='PlatefAccordCadre' autocomplete='off' value="" type='text' style='width:136.5px;border-width:0px; '  onBlur="javascript:appliqueFormules('PlatefAccordCadre', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
</table></td></tr>
</table>
<table id='Onglet2TableNumero52' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:211px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet2TableNumero52SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_PlatefRedevanceCom' class='CelLib' style='width:961.67px;'>
Redevance comm.
</td>
<td id='cellule_attr_PlatefRedevanceCom' data-tableau='Onglet2TableNumero52' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_PlatefRedevanceCom' style='border:1px solid #646464;  ' onMouseOver="javascript:changeZindexManuel('Onglet2TableNumero52', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet2TableNumero52', '');">
<input class='champs' autocomplete='off' id='ChampsOnglet_PlatefRedevanceCom' name='PlatefRedevanceCom' value="0" type='text' style='width:39px;border-width:0px; text-align:right; '  onBlur="javascript:appliqueFormules('PlatefRedevanceCom', '116');" onKeyDown="javascript:onKeyDownNumerique(this);" onKeyUp="javascript:onKeyUpNumerique(this);" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
<td id='cellule_unite_PlatefRedevanceCom' class='CelUnite' style='width:7px;'>
<nobr>%</nobr>
</td>
</table></td></tr>
</table>
<table id='Onglet2TableNumero53' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:237.66666666667px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet2TableNumero53SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_leg_ref_plateforme' class='CelLib' style='width:961.67px;'>

</td>
<td id='cellule_attr_leg_ref_plateforme' data-tableau='Onglet2TableNumero53' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_leg_ref_plateforme' style='border:1px solid transparent; background-color:transparent; overflow:hidden; height:16px;   cursor:default;' onMouseOver="javascript:changeZindexManuel('Onglet2TableNumero53', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet2TableNumero53', '');" >
<div id='div_champs_non_modif_leg_ref_plateforme' style='width:195px;'></div>
</div>
</td>
</table></td></tr>
</table>
<table id='Onglet2TableNumero54' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:264.33333333333px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet2TableNumero54SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_PlatefNoDossier' class='CelLib' style='width:961.67px;'>
Dossier n°
</td>
<td id='cellule_attr_PlatefNoDossier' data-tableau='Onglet2TableNumero54' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_PlatefNoDossier' style='border:1px inset #C1C1C1;  ' onMouseOver="javascript:changeZindexManuel('Onglet2TableNumero54', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet2TableNumero54', '');" >
<input  class='champs' id='ChampsOnglet_PlatefNoDossier' name='PlatefNoDossier' autocomplete='off' value="" type='text' style='width:136.5px;border-width:0px; '  onBlur="javascript:appliqueFormules('PlatefNoDossier', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
</table></td></tr>
</table>
<table id='Onglet2TableNumero55' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:291px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet2TableNumero55SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_PlatefDatReception' class='CelLib' style='width:961.67px;'>
Réception mission le
</td>
<td id='cellule_attr_PlatefDatReception' data-tableau='Onglet2TableNumero55' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_PlatefDatReception' style='border:1px inset #C1C1C1;  ' onMouseOver="javascript:changeZindexManuel('Onglet2TableNumero55', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet2TableNumero55', '');">
<input class='champs' autocomplete='off' id='ChampsOnglet_PlatefDatReception' name='PlatefDatReception' value="" type='text' style='width:65px;border-width:0px; cursor:default; ' onClick="javascript:nePasChangerZindex('Onglet2TableNumero55', 'date');" onFocus="javascript:focusDate('ChampsOnglet_PlatefDatReception'); select(); valeurInputEnCours=this.value;" onBlur="javascript:blurDate('ChampsOnglet_PlatefDatReception', 'PlatefDatReception', '116', '', '', '');"><img id='img_calendrier_ChampsOnglet_PlatefDatReception' style='cursor:pointer; position:absolute; display:none;' border='0' src='images/Icones/calendrier.png' onMouseDown="javascript:ouvreCalendrier('calendrier.php?id=116&attr=PlatefDatReception&id_input=ChampsOnglet_PlatefDatReception&id_div=div_calendrier_PlatefDatReception&val_input='+this.value+'&HR=21:57:14', 'div_calendrier_PlatefDatReception', 'ChampsOnglet_PlatefDatReception');">
</div>
</td>
</table></td></tr>
</table>
<table id='Onglet2TableNumero56' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:317.66666666667px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet2TableNumero56SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_leg_coord_gest_plateforme' class='CelLib' style='width:961.67px;'>

</td>
<td id='cellule_attr_leg_coord_gest_plateforme' data-tableau='Onglet2TableNumero56' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_leg_coord_gest_plateforme' style='border:1px solid transparent; background-color:transparent; overflow:hidden; height:16px;   cursor:default;' onMouseOver="javascript:changeZindexManuel('Onglet2TableNumero56', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet2TableNumero56', '');" >
<div id='div_champs_non_modif_leg_coord_gest_plateforme' style='width:195px;'></div>
</div>
</td>
</table></td></tr>
</table>
<table id='Onglet2TableNumero57' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:344.33333333333px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet2TableNumero57SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_PlatefGestNomPrenom' class='CelLib' style='width:961.67px;'>
Nom gestionnaire
</td>
<td id='cellule_attr_PlatefGestNomPrenom' data-tableau='Onglet2TableNumero57' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_PlatefGestNomPrenom' style='border:1px solid #646464;  ' onMouseOver="javascript:changeZindexManuel('Onglet2TableNumero57', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet2TableNumero57', '');" >
<input  class='champs' id='ChampsOnglet_PlatefGestNomPrenom' name='PlatefGestNomPrenom' autocomplete='off' value="" type='text' style='width:214.5px;border-width:0px; '  onBlur="javascript:appliqueFormules('PlatefGestNomPrenom', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
<td id='cellule_bouton_PlatefGestNomPrenom' style='vertical-align:top;'>
<input type='button' data-ident='' value=""  style="background:#ffffff url('images/icone_Dico.jpg') no-repeat top left; height:19px;  width:19px;  border-width:1px; cursor:pointer;" onClick="javascript:AfficheSuperDico('PlatefGestNomPrenom', 'ListeGestionnairePlateformeDiEzENoPlateforme=PlatefId', 'NomPrenom>PlatefGestNomPrenom;Prefixe>PlatefGestPrefixe;Prenom>PlatefGestPrenom;Adresse1>PlatefGestAdresse1;Adresse2>PlatefGestAdresse2;CP>PlatefGestCP;Ville>PlatefGestVille;Tel>PlatefGestTel;TeP>PlatefGestTeP;Email>PlatefGestEmail', '', '', '', '', false, false); return false;"></td>
<td id='cellule_lib_PlatefGestPrefixe' class='CelLib' style='padding-left:10px; width:-2px;'>

</td>
<td id='cellule_attr_PlatefGestPrefixe' data-tableau='Onglet2TableNumero57' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_PlatefGestPrefixe' style='border:1px solid #646464;  ' onMouseOver="javascript:changeZindexManuel('Onglet2TableNumero57', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet2TableNumero57', '');">
<input class='champs' autocomplete='off' id='ChampsOnglet_PlatefGestPrefixe' name='PlatefGestPrefixe' value="" type='text' style=' width:35px;border-width:0px; '  onBlur="javascript:appliqueFormules('PlatefGestPrefixe', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"><img id='Image_PlatefGestPrefixe' src='images/2016/bouton_bas.png' alt='' class='BoutDico' onClick="javascript:nePasChangerZindex('Onglet2TableNumero57', 'menu'); afficheCacheMenuDeroulant('listePlatefGestPrefixe', 'ChampsOnglet_PlatefGestPrefixe', 'Onglet2TableNumero57');" onMouseDown="javascript:this.src='images/2016/bouton_bas_click.png';" onMouseUp="javascript:this.src='images/2016/bouton_bas.png';">
</div>
<div id='listePlatefGestPrefixe' style='height:110px; overflow-y:auto;overflow-x:hidden;position:fixed;display:none;z-index:5000;border:1px solid #C1C1C1;min-width:48px;background-color:#ffffff;padding:2;' onMouseOver="javascript:cacherMenuDeroulant = false;" onMouseOut="javascript:cacherMenuDeroulant = true;">
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_PlatefGestPrefixe', 'M.', 'listePlatefGestPrefixe');appliqueFormules('PlatefGestPrefixe', '116');"><nobr>M.</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_PlatefGestPrefixe', 'Mme', 'listePlatefGestPrefixe');appliqueFormules('PlatefGestPrefixe', '116');"><nobr>Mme</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_PlatefGestPrefixe', 'Melle', 'listePlatefGestPrefixe');appliqueFormules('PlatefGestPrefixe', '116');"><nobr>Melle</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_PlatefGestPrefixe', 'M & Mme', 'listePlatefGestPrefixe');appliqueFormules('PlatefGestPrefixe', '116');"><nobr>M & Mme</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_PlatefGestPrefixe', 'M & M', 'listePlatefGestPrefixe');appliqueFormules('PlatefGestPrefixe', '116');"><nobr>M & M</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_PlatefGestPrefixe', 'Mme & Mme', 'listePlatefGestPrefixe');appliqueFormules('PlatefGestPrefixe', '116');"><nobr>Mme & Mme</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_PlatefGestPrefixe', 'Melle & Melle', 'listePlatefGestPrefixe');appliqueFormules('PlatefGestPrefixe', '116');"><nobr>Melle & Melle</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_PlatefGestPrefixe', 'SA', 'listePlatefGestPrefixe');appliqueFormules('PlatefGestPrefixe', '116');"><nobr>SA</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_PlatefGestPrefixe', 'SARL', 'listePlatefGestPrefixe');appliqueFormules('PlatefGestPrefixe', '116');"><nobr>SARL</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_PlatefGestPrefixe', 'SAS', 'listePlatefGestPrefixe');appliqueFormules('PlatefGestPrefixe', '116');"><nobr>SAS</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_PlatefGestPrefixe', 'EURL', 'listePlatefGestPrefixe');appliqueFormules('PlatefGestPrefixe', '116');"><nobr>EURL</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_PlatefGestPrefixe', 'Société', 'listePlatefGestPrefixe');appliqueFormules('PlatefGestPrefixe', '116');"><nobr>Société</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_PlatefGestPrefixe', 'Entreprise', 'listePlatefGestPrefixe');appliqueFormules('PlatefGestPrefixe', '116');"><nobr>Entreprise</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_PlatefGestPrefixe', 'Etablissement', 'listePlatefGestPrefixe');appliqueFormules('PlatefGestPrefixe', '116');"><nobr>Etablissement</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_PlatefGestPrefixe', 'Administration', 'listePlatefGestPrefixe');appliqueFormules('PlatefGestPrefixe', '116');"><nobr>Administration</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_PlatefGestPrefixe', 'Cabinet', 'listePlatefGestPrefixe');appliqueFormules('PlatefGestPrefixe', '116');"><nobr>Cabinet</nobr></div>
</div>
</td>
<input id='ChampsOnglet_PlatefGestPrenom' name='PlatefGestPrenom' value="" type='hidden'>
</table></td></tr>
</table>
<table id='Onglet2TableNumero58' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:371px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet2TableNumero58SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_PlatefGestAdresse1' class='CelLib' style='width:961.67px;'>
Adresse
</td>
<td id='cellule_attr_PlatefGestAdresse1' data-tableau='Onglet2TableNumero58' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_PlatefGestAdresse1' style='border:1px solid #646464;  ' onMouseOver="javascript:changeZindexManuel('Onglet2TableNumero58', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet2TableNumero58', '');" >
<input  class='champs' id='ChampsOnglet_PlatefGestAdresse1' name='PlatefGestAdresse1' autocomplete='off' value="" type='text' style='width:214.5px;border-width:0px; '  onBlur="javascript:appliqueFormules('PlatefGestAdresse1', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
</table></td></tr>
</table>
<table id='Onglet2TableNumero59' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:397.66666666667px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet2TableNumero59SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_PlatefGestAdresse2' class='CelLib' style='width:961.67px;'>

</td>
<td id='cellule_attr_PlatefGestAdresse2' data-tableau='Onglet2TableNumero59' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_PlatefGestAdresse2' style='border:1px solid #646464;  ' onMouseOver="javascript:changeZindexManuel('Onglet2TableNumero59', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet2TableNumero59', '');" >
<input  class='champs' id='ChampsOnglet_PlatefGestAdresse2' name='PlatefGestAdresse2' autocomplete='off' value="" type='text' style='width:214.5px;border-width:0px; '  onBlur="javascript:appliqueFormules('PlatefGestAdresse2', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
</table></td></tr>
</table>
<table id='Onglet2TableNumero60' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:424.33333333333px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet2TableNumero60SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_PlatefGestCP' class='CelLib' style='width:961.67px;'>
Code Postal
</td>
<td id='cellule_attr_PlatefGestCP' data-tableau='Onglet2TableNumero60' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_PlatefGestCP' style='border:1px solid #646464;  ' onMouseOver="javascript:changeZindexManuel('Onglet2TableNumero60', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet2TableNumero60', '');" >
<input  class='champs' id='ChampsOnglet_PlatefGestCP' name='PlatefGestCP' autocomplete='off' value="" type='text' style='width:52px;border-width:0px; '  onBlur="javascript:appliqueFormules('PlatefGestCP', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
<td id='cellule_lib_PlatefGestVille' class='CelLib' style='padding-left:10px; width:28px;'>
Ville
</td>
<td id='cellule_attr_PlatefGestVille' data-tableau='Onglet2TableNumero60' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_PlatefGestVille' style='border:1px solid #646464;  ' onMouseOver="javascript:changeZindexManuel('Onglet2TableNumero60', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet2TableNumero60', '');" >
<input  class='champs' id='ChampsOnglet_PlatefGestVille' name='PlatefGestVille' autocomplete='off' value="" type='text' style='width:130px;border-width:0px; '  onBlur="javascript:appliqueFormules('PlatefGestVille', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
</table></td></tr>
</table>
<table id='Onglet2TableNumero61' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:451px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet2TableNumero61SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_PlatefGestTel' class='CelLib' style='width:961.67px;'>
Tél.
</td>
<td id='cellule_attr_PlatefGestTel' data-tableau='Onglet2TableNumero61' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_PlatefGestTel' style='border:1px solid #646464;  ' onMouseOver="javascript:changeZindexManuel('Onglet2TableNumero61', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet2TableNumero61', '');" >
<input  class='champs' id='ChampsOnglet_PlatefGestTel' name='PlatefGestTel' autocomplete='off' value="" type='text' style='width:97.5px;border-width:0px; '  onBlur="javascript:appliqueFormules('PlatefGestTel', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
<td id='cellule_lib_PlatefGestTeP' class='CelLib' style='padding-left:10px; width:38.83px;'>
Tél.P
</td>
<td id='cellule_attr_PlatefGestTeP' data-tableau='Onglet2TableNumero61' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_PlatefGestTeP' style='border:1px solid #646464;  ' onMouseOver="javascript:changeZindexManuel('Onglet2TableNumero61', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet2TableNumero61', '');" >
<input  class='champs' id='ChampsOnglet_PlatefGestTeP' name='PlatefGestTeP' autocomplete='off' value="" type='text' style='width:97.5px;border-width:0px; '  onBlur="javascript:appliqueFormules('PlatefGestTeP', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
</table></td></tr>
</table>
<table id='Onglet2TableNumero62' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:477.66666666667px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet2TableNumero62SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_PlatefGestEmail' class='CelLib' style='width:961.67px;'>
Email
</td>
<td id='cellule_attr_PlatefGestEmail' data-tableau='Onglet2TableNumero62' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_PlatefGestEmail' style='border:1px solid #646464;  ' onMouseOver="javascript:changeZindexManuel('Onglet2TableNumero62', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet2TableNumero62', '');" >
<input  class='champs' id='ChampsOnglet_PlatefGestEmail' name='PlatefGestEmail' autocomplete='off' value="" type='text' style='width:214.5px;border-width:0px; '  onBlur="javascript:appliqueFormules('PlatefGestEmail', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
</table></td></tr>
</table>
</div>
<div id='div_Suivi commercial' class='fond_interface_elmt' style='position:relative; display:none; overflow:none; width:1311.33px;  height:855.66666666667px; '>
<table id='Onglet3TableNumero1' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:19.333333333333px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet3TableNumero1SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_AgenceUP' class='CelLib' style='width:128.33px;'>
Agence UP
</td>
<td id='cellule_attr_AgenceUP' data-tableau='Onglet3TableNumero1' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_AgenceUP' style='border:1px solid #646464;  ' onMouseOver="javascript:changeZindexManuel('Onglet3TableNumero1', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet3TableNumero1', '');" >
<input  class='champs' id='ChampsOnglet_AgenceUP' name='AgenceUP' autocomplete='off' value="Agence Centre-Est" type='text' style='width:130px;border-width:0px; '  onBlur="javascript:appliqueFormules('AgenceUP', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
<td id='cellule_lib_UtilCreation' class='CelLib' style='padding-left:10px; width:106.33px;'>
Dossier créé par
</td>
<td id='cellule_attr_UtilCreation' data-tableau='Onglet3TableNumero1' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_UtilCreation' style='border:1px solid #646464;  ' onMouseOver="javascript:changeZindexManuel('Onglet3TableNumero1', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet3TableNumero1', '');" >
<input  class='champs' id='ChampsOnglet_UtilCreation' name='UtilCreation' autocomplete='off' value="Berthier Fabien" type='text' style='width:97.5px;border-width:0px; '  onBlur="javascript:appliqueFormules('UtilCreation', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
</table></td></tr>
</table>
<table id='Onglet3TableNumero2' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:46px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet3TableNumero2SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_UtilReception' class='CelLib' style='width:128.33px;'>
Réception par
</td>
<td id='cellule_attr_UtilReception' data-tableau='Onglet3TableNumero2' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_UtilReception' style='border:1px inset #C1C1C1;  ' onMouseOver="javascript:changeZindexManuel('Onglet3TableNumero2', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet3TableNumero2', '');">
<input class='champs' autocomplete='off' id='ChampsOnglet_UtilReception' name='UtilReception' value="Berthier Fabien" type='text' style='z-index:5;  width:80.5px;border-width:0px; ' readOnly='readOnly' onFocus="javascript:select(); valeurInputEnCours=this.value;"><img id='Image_UtilReception' src='images/2016/bouton_bas.png' alt='' class='BoutDico' onClick="javascript:nePasChangerZindex('Onglet3TableNumero2', 'menu'); afficheCacheMenuDeroulant('listeUtilReception', 'ChampsOnglet_UtilReception', 'Onglet3TableNumero2');" onMouseDown="javascript:this.src='images/2016/bouton_bas_click.png';" onMouseUp="javascript:this.src='images/2016/bouton_bas.png';">
</div>
<div id='listeUtilReception' style=' overflow-y:auto;overflow-x:hidden;position:fixed;display:none;z-index:5000;border:1px solid #C1C1C1;min-width:93.5px;background-color:#ffffff;padding:2;' onMouseOver="javascript:cacherMenuDeroulant = false;" onMouseOut="javascript:cacherMenuDeroulant = true;">
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_UtilReception', '', 'listeUtilReception');appliqueFormules('UtilReception', '116');"><nobr>&nbsp;</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_UtilReception', 'Berthier Fabien', 'listeUtilReception');appliqueFormules('UtilReception', '116');"><nobr>Berthier Fabien</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_UtilReception', 'CANCELA', 'listeUtilReception');appliqueFormules('UtilReception', '116');"><nobr>CANCELA</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_UtilReception', 'CONDAMINES Caroline', 'listeUtilReception');appliqueFormules('UtilReception', '116');"><nobr>CONDAMINES Caroline</nobr></div>
</div>
</td>
<td id='cellule_lib_ModReception' class='CelLib' style='padding-left:10px; width:138.83px;'>
Réception sur
</td>
<td id='cellule_attr_ModReception' data-tableau='Onglet3TableNumero2' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_ModReception' style='border:1px inset #C1C1C1;  ' onMouseOver="javascript:changeZindexManuel('Onglet3TableNumero2', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet3TableNumero2', '');">
<input class='champs' autocomplete='off' id='ChampsOnglet_ModReception' name='ModReception' value="" type='text' style='z-index:5;  width:145.5px;border-width:0px; ' readOnly='readOnly' onFocus="javascript:select(); valeurInputEnCours=this.value;"><img id='Image_ModReception' src='images/2016/bouton_bas.png' alt='' class='BoutDico' onClick="javascript:nePasChangerZindex('Onglet3TableNumero2', 'menu'); afficheCacheMenuDeroulant('listeModReception', 'ChampsOnglet_ModReception', 'Onglet3TableNumero2');" onMouseDown="javascript:this.src='images/2016/bouton_bas_click.png';" onMouseUp="javascript:this.src='images/2016/bouton_bas.png';">
</div>
<div id='listeModReception' style=' overflow-y:auto;overflow-x:hidden;position:fixed;display:none;z-index:5000;border:1px solid #C1C1C1;min-width:158.5px;background-color:#ffffff;padding:2;' onMouseOver="javascript:cacherMenuDeroulant = false;" onMouseOut="javascript:cacherMenuDeroulant = true;">
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_ModReception', 'Application YOUR-UP', 'listeModReception');appliqueFormules('ModReception', '116');"><nobr>Application YOUR-UP</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_ModReception', 'Boîte \'24H24\'', 'listeModReception');appliqueFormules('ModReception', '116');"><nobr>Boîte '24H24'</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_ModReception', 'Boîte mail \'Info\'', 'listeModReception');appliqueFormules('ModReception', '116');"><nobr>Boîte mail 'Info'</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_ModReception', 'Boîte mail \'Partenaire\'', 'listeModReception');appliqueFormules('ModReception', '116');"><nobr>Boîte mail 'Partenaire'</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_ModReception', 'Boîte mail personnelle', 'listeModReception');appliqueFormules('ModReception', '116');"><nobr>Boîte mail personnelle</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_ModReception', 'Fax', 'listeModReception');appliqueFormules('ModReception', '116');"><nobr>Fax</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_ModReception', 'Téléphone Fixe', 'listeModReception');appliqueFormules('ModReception', '116');"><nobr>Téléphone Fixe</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_ModReception', 'Téléphone Mobile', 'listeModReception');appliqueFormules('ModReception', '116');"><nobr>Téléphone Mobile</nobr></div>
</div>
</td>
<td id='cellule_lib_DateReception' class='CelLib' style='padding-left:10px; width:140.5px;'>
Réceptionné le
</td>
<td id='cellule_attr_DateReception' data-tableau='Onglet3TableNumero2' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_DateReception' style='border:1px inset #C1C1C1;  ' onMouseOver="javascript:changeZindexManuel('Onglet3TableNumero2', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet3TableNumero2', '');">
<input class='champs' autocomplete='off' id='ChampsOnglet_DateReception' name='DateReception' value="" type='text' style='width:58.5px;border-width:0px; cursor:default; ' onClick="javascript:nePasChangerZindex('Onglet3TableNumero2', 'date');" onFocus="javascript:focusDate('ChampsOnglet_DateReception'); select(); valeurInputEnCours=this.value;" onBlur="javascript:blurDate('ChampsOnglet_DateReception', 'DateReception', '116', '', '', '');"><img id='img_calendrier_ChampsOnglet_DateReception' style='cursor:pointer; position:absolute; display:none;' border='0' src='images/Icones/calendrier.png' onMouseDown="javascript:ouvreCalendrier('calendrier.php?id=116&attr=DateReception&id_input=ChampsOnglet_DateReception&id_div=div_calendrier_DateReception&val_input='+this.value+'&HR=21:57:14', 'div_calendrier_DateReception', 'ChampsOnglet_DateReception');">
</div>
</td>
</table></td></tr>
</table>
<table id='Onglet3TableNumero3' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:72.666666666667px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet3TableNumero3SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_Responsable' class='CelLib' style='width:128.33px;'>
Responsable client
</td>
<td id='cellule_attr_Responsable' data-tableau='Onglet3TableNumero3' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_Responsable' style='border:1px solid #646464; background-color:#ffc0c0; ' onMouseOver="javascript:changeZindexManuel('Onglet3TableNumero3', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet3TableNumero3', '');" >
<input  class='champs' id='ChampsOnglet_Responsable' name='Responsable' autocomplete='off' value="CONDAMINES Caroline" type='text' style='width:97.5px;border-width:0px; background-color:#ffc0c0;'  onBlur="javascript:appliqueFormules('Responsable', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
<td id='cellule_bouton_Responsable' style='vertical-align:top;'>
<input type='button' data-ident='' value=""  style="background:#ffffff url('images/icone_Dico.jpg') no-repeat top left; height:19px;  width:19px;  border-width:1px; cursor:pointer;" onClick="javascript:AfficheSuperDico('Responsable', 'Utilisateurs', 'Nom>Responsable;Sigle>Sigle', '', '', '', '', false, false); return false;"></td>
<input id='ChampsOnglet_Sigle' name='Sigle' value="CCO" type='hidden'>
<td id='cellule_lib_ChargeRecon' class='CelLib' style='padding-left:10px; width:119.83px;'>
Chargé reconnaissance
</td>
<td id='cellule_attr_ChargeRecon' data-tableau='Onglet3TableNumero3' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_ChargeRecon' style='border:1px solid #646464;  ' onMouseOver="javascript:changeZindexManuel('Onglet3TableNumero3', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet3TableNumero3', '');" >
<input  class='champs' id='ChampsOnglet_ChargeRecon' name='ChargeRecon' autocomplete='off' value="" type='text' style='width:97.5px;border-width:0px; '  onBlur="javascript:appliqueFormules('ChargeRecon', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
<td id='cellule_bouton_ChargeRecon' style='vertical-align:top;'>
<input type='button' data-ident='' value=""  style="background:#ffffff url('images/icone_Dico.jpg') no-repeat top left; height:19px;  width:19px;  border-width:1px; cursor:pointer;" onClick="javascript:AfficheSuperDico('ChargeRecon', 'Utilisateurs', 'Nom>ChargeRecon;Sigle>SigChargeRecon', '', '', '', '', false, false); return false;"></td>
<td id='cellule_lib_DatRecon' class='CelLib' style='padding-left:10px; width:186.5px;'>
Reconnaissance le
</td>
<td id='cellule_attr_DatRecon' data-tableau='Onglet3TableNumero3' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_DatRecon' style='border:1px solid #646464;  ' onMouseOver="javascript:changeZindexManuel('Onglet3TableNumero3', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet3TableNumero3', '');">
<input class='champs' autocomplete='off' id='ChampsOnglet_DatRecon' name='DatRecon' value="" type='text' style='width:58.5px;border-width:0px; cursor:default; ' onClick="javascript:nePasChangerZindex('Onglet3TableNumero3', 'date');" onFocus="javascript:focusDate('ChampsOnglet_DatRecon'); select(); valeurInputEnCours=this.value;" onBlur="javascript:blurDate('ChampsOnglet_DatRecon', 'DatRecon', '116', '', '', '');"><img id='img_calendrier_ChampsOnglet_DatRecon' style='cursor:pointer; position:absolute; display:none;' border='0' src='images/Icones/calendrier.png' onMouseDown="javascript:ouvreCalendrier('calendrier.php?id=116&attr=DatRecon&id_input=ChampsOnglet_DatRecon&id_div=div_calendrier_DatRecon&val_input='+this.value+'&HR=21:57:14', 'div_calendrier_DatRecon', 'ChampsOnglet_DatRecon');">
</div>
</td>
</table></td></tr>
</table>
<table id='Onglet3TableNumero4' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:99.333333333333px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet3TableNumero4SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_Instructions' class='CelLib' style='width:128.33px;'>
Instructions
</td>
<td id='cellule_attr_Instructions' data-tableau='Onglet3TableNumero4' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_Instructions' style=' border:1px inset #C1C1C1;  ' onMouseOver="javascript:changeZindexManuel('Onglet3TableNumero4', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet3TableNumero4', '');">
<textarea class='champs' id='ChampsOnglet_Instructions' data-type='TEXT2' name='Instructions' style='width:390px; height:60px; border-width:0px; '  onBlur="javascript:appliqueFormules('Instructions', '116');" onFocus="javascript:select(); valeurInputEnCours=this.value;">
Instructionss</textarea>
</div>
</td>
</table></td></tr>
</table>
<table id='Onglet3TableNumero5' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:171px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet3TableNumero5SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_IsFranchise' class='CelLib' style='width:128.33px;'>
Franchise ?
</td>
<td id='cellule_attr_IsFranchise' data-tableau='Onglet3TableNumero5' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_IsFranchise' style='border:1px inset #C1C1C1;  ' onMouseOver="javascript:changeZindexManuel('Onglet3TableNumero5', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet3TableNumero5', '');">
<input class='champs' autocomplete='off' id='ChampsOnglet_IsFranchise' name='IsFranchise' value="" type='text' style='z-index:5;  width:48px;border-width:0px; ' readOnly='readOnly' onFocus="javascript:select(); valeurInputEnCours=this.value;"><img id='Image_IsFranchise' src='images/2016/bouton_bas.png' alt='' class='BoutDico' onClick="javascript:nePasChangerZindex('Onglet3TableNumero5', 'menu'); afficheCacheMenuDeroulant('listeIsFranchise', 'ChampsOnglet_IsFranchise', 'Onglet3TableNumero5');" onMouseDown="javascript:this.src='images/2016/bouton_bas_click.png';" onMouseUp="javascript:this.src='images/2016/bouton_bas.png';">
</div>
<div id='listeIsFranchise' style=' overflow-y:auto;overflow-x:hidden;position:fixed;display:none;z-index:5000;border:1px solid #C1C1C1;min-width:61px;background-color:#ffffff;padding:2;' onMouseOver="javascript:cacherMenuDeroulant = false;" onMouseOut="javascript:cacherMenuDeroulant = true;">
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_IsFranchise', '', 'listeIsFranchise');appliqueFormules('IsFranchise', '116');"><nobr>&nbsp;</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_IsFranchise', 'OUI', 'listeIsFranchise');appliqueFormules('IsFranchise', '116');"><nobr>OUI</nobr></div>
</div>
</td>
<td id='cellule_lib_MontFranchise' class='CelLib' style='padding-left:10px; width:171.33px;'>
Montant franchise
</td>
<td id='cellule_attr_MontFranchise' data-tableau='Onglet3TableNumero5' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_MontFranchise' style='border:1px inset #C1C1C1;  ' onMouseOver="javascript:changeZindexManuel('Onglet3TableNumero5', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet3TableNumero5', '');">
<input class='champs' autocomplete='off' id='ChampsOnglet_MontFranchise' name='MontFranchise' value="0" type='text' style='width:65px;border-width:0px; text-align:right; '  onBlur="javascript:appliqueFormules('MontFranchise', '116');" onKeyDown="javascript:onKeyDownNumerique(this);" onKeyUp="javascript:onKeyUpNumerique(this);" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
<td id='cellule_unite_MontFranchise' class='CelUnite' style='width:21px;'>
<nobr>&euro;</nobr>
</td>
<td id='cellule_lib_IsTVA' class='CelLib' style='padding-left:10px; width:214px;'>
TVA à percevoir ?
</td>
<td id='cellule_attr_IsTVA' data-tableau='Onglet3TableNumero5' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_IsTVA' style='border:1px inset #C1C1C1;  ' onMouseOver="javascript:changeZindexManuel('Onglet3TableNumero5', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet3TableNumero5', '');">
<input class='champs' autocomplete='off' id='ChampsOnglet_IsTVA' name='IsTVA' value="" type='text' style='z-index:5;  width:48px;border-width:0px; ' readOnly='readOnly' onFocus="javascript:select(); valeurInputEnCours=this.value;"><img id='Image_IsTVA' src='images/2016/bouton_bas.png' alt='' class='BoutDico' onClick="javascript:nePasChangerZindex('Onglet3TableNumero5', 'menu'); afficheCacheMenuDeroulant('listeIsTVA', 'ChampsOnglet_IsTVA', 'Onglet3TableNumero5');" onMouseDown="javascript:this.src='images/2016/bouton_bas_click.png';" onMouseUp="javascript:this.src='images/2016/bouton_bas.png';">
</div>
<div id='listeIsTVA' style=' overflow-y:auto;overflow-x:hidden;position:fixed;display:none;z-index:5000;border:1px solid #C1C1C1;min-width:61px;background-color:#ffffff;padding:2;' onMouseOver="javascript:cacherMenuDeroulant = false;" onMouseOut="javascript:cacherMenuDeroulant = true;">
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_IsTVA', '', 'listeIsTVA');appliqueFormules('IsTVA', '116');"><nobr>&nbsp;</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_IsTVA', 'OUI', 'listeIsTVA');appliqueFormules('IsTVA', '116');"><nobr>OUI</nobr></div>
</div>
</td>
<td id='cellule_lib_ReducTVA' class='CelLib' style='padding-left:10px; width:211.33px;'>
TVA réduite ?
</td>
<td id='cellule_attr_ReducTVA' data-tableau='Onglet3TableNumero5' style='vertical-align:top;'>
<div class='div_champs'  id='div_englobant_ReducTVA' style='border:1px inset #C1C1C1;  ' onMouseOver="javascript:changeZindexManuel('Onglet3TableNumero5', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet3TableNumero5', '');">
<input class='champs' autocomplete='off' id='ChampsOnglet_ReducTVA' name='ReducTVA' value="OUI" type='text' style='z-index:5;  width:48px;border-width:0px; ' readOnly='readOnly' onFocus="javascript:select(); valeurInputEnCours=this.value;"><img id='Image_ReducTVA' src='images/2016/bouton_bas.png' alt='' class='BoutDico' onClick="javascript:nePasChangerZindex('Onglet3TableNumero5', 'menu'); afficheCacheMenuDeroulant('listeReducTVA', 'ChampsOnglet_ReducTVA', 'Onglet3TableNumero5');" onMouseDown="javascript:this.src='images/2016/bouton_bas_click.png';" onMouseUp="javascript:this.src='images/2016/bouton_bas.png';">
</div>
<div id='listeReducTVA' style=' overflow-y:auto;overflow-x:hidden;position:fixed;display:none;z-index:5000;border:1px solid #C1C1C1;min-width:61px;background-color:#ffffff;padding:2;' onMouseOver="javascript:cacherMenuDeroulant = false;" onMouseOut="javascript:cacherMenuDeroulant = true;">
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_ReducTVA', '', 'listeReducTVA');appliqueFormules('ReducTVA', '116');"><nobr>&nbsp;</nobr></div>
<div class='ValeurMenuDeroulantOff' onMouseOver="javascript:this.className='ValeurMenuDeroulantOn';" onMouseOut="javascript:this.className='ValeurMenuDeroulantOff';" onMouseDown="javascript:clickValeurMenuDeroulant('ChampsOnglet_ReducTVA', 'OUI', 'listeReducTVA');appliqueFormules('ReducTVA', '116');"><nobr>OUI</nobr></div>
</div>
</td>
</table></td></tr>
</table>
<table id='Onglet3TableNumero6' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:197.66666666667px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet3TableNumero6SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_Chantiers' class='CelLib' style='width:128.33px;'>
Chantiers
</td>
<td id='cellule_attr_Chantiers' data-tableau='Onglet3TableNumero6' style='vertical-align:top;'>
<div id='div_englobant_Chantiers' style='width:624px;   padding:0; margin:0; border-width:0px; overflow: none; height:124px;' onMouseOver="javascript:changeZindexManuel('Onglet3TableNumero6', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet3TableNumero6', '');">
<div class='MenuMini' style=';'>
<table cellpadding='0' cellspacing='2' border='0' style='padding:0px;'>
<tr>
<td class='BoutonMenuOffMini' onmouseover="javascript:changeClasseBoutonMenu(this, 'Chantiers', 'Chantiers_masque_nouveau', 'BoutonMenuOnMini');" onmouseout="javascript:changeClasseBoutonMenu(this, 'Chantiers', 'Chantiers_masque_nouveau', 'BoutonMenuOffMini');" onMouseDown="javascript:changeClasseBoutonMenu(this, 'Chantiers', 'Chantiers_masque_nouveau', 'BoutonMenuClickMini'); OuvreElementTableDist('SC_Chantiers', '', 'Id>IdDossier;Reference>DossierRef;NomRisque>DossierNomRisque;CodeRegion>CodeRegion;NoClient>NoClient;NomPrenom>NomPrenom;Prefixe>Prefixe;Adresse1>Adresse1;Adresse2>Adresse2;CP>CP;Ville>Ville;Responsable>Commercial;Sigle>Sigle;NomLivr>SCLibChantier;Adr1Livr>Adresse1Ch;Adr2Livr>Adresse2Ch;CLivr>CPCh;VilLivr>VilleCh;PayLivr>PaysCh;Tel>Tel;DeuxTelephone>DeuxTelephone;Fax>Fax;TeP>TeP;Email>Email;TVAIntra>TVAIntra;Provenance>Provenance;TypeClient>TypeClient;Famille>Famille;IntLivrContact>IntChContact;IntLivrPrefixe>IntChPrefixe;IntTLivr>IntTCh;IntPortLivr>IntPortCh;IntLivrMail>IntChMail;IntLivrDeuxMail>IntChDeuxMail;IntFax>IntChFax', 'Chantiers');" onMouseUp="javascript:changeClasseBoutonMenu(this, 'Chantiers', 'Chantiers_masque_nouveau', 'BoutonMenuOnMini');">
<img src='images/2016/Icones/nouveau.png' alt='' border='0' style='vertical-align:middle;'>
<img id='Chantiers_masque_nouveau' border='0' style='vertical-align:middle; display:none; margin-left: -18px; %margin-left: -20px; position: absolute;' src='images/Icones/masque_inactif.gif' class='masqueVerrou' alt=''>
</td>
<td class='BoutonMenuOffAvecSousMenuMini' onmouseover="javascript:this.className='BoutonMenuOnAvecSousMenuMini';document.getElementById('Chantiers_SousMenuFctOutils').className = 'BoutonSousMenuOnMini'; hoverSurBoutonStyle = true;" onmouseout="javascript:this.className='BoutonMenuOffAvecSousMenuMini';document.getElementById('Chantiers_SousMenuFctOutils').className = 'BoutonSousMenuOffMini'; hoverSurBoutonStyle = false;" onMouseDown="javascript:this.className='BoutonMenuClickAvecSousMenuMini';" onMouseUp="javascript:this.className='BoutonMenuOnAvecSousMenuMini';">
<table border='0' width='100%' cellpadding='0' cellspacing='0' style='padding:0px; margin:0px; border-collapse:collapse; empty-cells:show;'>
<tr>
<td align='center' valign='middle' class='BoutonMenuAvecSousMenuMini' onClick="javascript:ouvrirMenu('Chantiers_menuFctOutils', 'Chantiers_tablePopup_FctOutils');">
<img src='images/2016/Icones/fonctions.png' alt='' border='0' style='vertical-align:middle;'>
</td>
<td align='center' valign='middle' id='Chantiers_SousMenuFctOutils' class='BoutonSousMenuOffMini' onMouseDown="javascript:this.className='BoutonSousMenuClickMini';" onMouseUp="javascript:this.className='BoutonSousMenuOnMini';" onClick="javascript:ouvrirMenu('Chantiers_menuFctOutils', 'Chantiers_tablePopup_FctOutils');">
<img src='images/fleche_bas_menu.png' alt='' style='vertical-align:middle; height:auto;' border='0'>
<div id='Chantiers_menuFctOutils' class='menuPopup'>
<table id='Chantiers_tablePopup_FctOutils' class='table_popup_menu' height='100%' border='0' cellpadding='1' cellspacing='0' style='min-width:200px;'>
<tr onMouseDown="javascript:clickTitreTableauTablo('SC_ChantiersIncrustes', 'div_englobant_Chantiers', 'LISTE', 'Chantiers');" style='height:22px;' onMouseOver="javascript:survolMenu('Chantiers_outils_1', 'ON');" onMouseOut="javascript:survolMenu('Chantiers_outils_1', 'OFF');">
<td id='Chantiers_outils_1_g' width='28' style="empty-cells:show; width:28px;" class='menuPopupG'>
</td>
<td id='Chantiers_outils_1_m' class='menuPopup'>
<nobr>Colonnes affichées</nobr>
</td>
<td id='Chantiers_outils_1_d' width='3' style='empty-cells:show; width:3px;' class='menuPopupD'>
</td>
</tr>
<tr onMouseDown="javascript:alert('Exporter sous Excel pas encore pris en compte');" style='height:22px;' onMouseOver="javascript:survolMenu('Chantiers_outils_2', 'ON');" onMouseOut="javascript:survolMenu('Chantiers_outils_2', 'OFF');">
<td id='Chantiers_outils_2_g' width='28' style="empty-cells:show; width:28px;" class='menuPopupG'>
</td>
<td id='Chantiers_outils_2_m' class='menuPopup'>
<nobr>Exporter sous Excel</nobr>
</td>
<td id='Chantiers_outils_2_d' width='3' style='empty-cells:show; width:3px;' class='menuPopupD'>
</td>
</tr>
</table>
</div>
</td>
</tr>
</table>
</td>
</tr>
</table>
</div>
<div id='div_tablo_Chantiers' class='div_tablo' style='width:622px;  padding:0; margin:0; overflow: auto; height:97px;'>
<table border='1' cellpadding='3' class='tableau' id='TaBlEaU_Chantiers' style='background-color:#ffffff; margin:0;  width:622px; '>
<thead><tr id='Tablo_Chantiers_Ligne0'>
<td class='titre' style='width:16px;  padding:0px; margin:0px;'>
</td>
<td align='center' id='CoLoNnE_Tablo_Chantiers_SCNoChantier'  width='52px' class='titre' align='center' style='margin: 0px; padding :0px;'>
<table style='color: inherit; width:100%; margin:0px; padding:0px; border-width:0px; table-layout:fixed;' border='0' cellspacing='0' cellpadding='0'>
<tr>
<td align='center' style='overflow:hidden; white-space:nowrap;' oncontextmenu="javascript:clickTitreTableauTablo('SC_ChantiersIncrustes', 'div_englobant_Chantiers', 'LISTE', 'Chantiers');return false;" onClick="javascript:TrierListe('Onglet3TableNumero6', 'Chantiers', '116', '116', 'SCNoChantier', 'ASC');">
N° Chantier
</td>
<td width='3' align='right' class='Resizor' onmousedown="javascript:setPosition(event, 'TaBlEaU_Chantiers');" onmouseover="javascript:setResizeColumns('CoLoNnE_Tablo_Chantiers_SCNoChantier', '12');">
</td>
</tr>
</table>
</td>
<td align='center' id='CoLoNnE_Tablo_Chantiers_DateChantier'  width='58.5px' class='titre' align='center' style='margin: 0px; padding :0px;'>
<table style='color: inherit; width:100%; margin:0px; padding:0px; border-width:0px; table-layout:fixed;' border='0' cellspacing='0' cellpadding='0'>
<tr>
<td align='center' style='overflow:hidden; white-space:nowrap;' oncontextmenu="javascript:clickTitreTableauTablo('SC_ChantiersIncrustes', 'div_englobant_Chantiers', 'LISTE', 'Chantiers');return false;" onClick="javascript:TrierListe('Onglet3TableNumero6', 'Chantiers', '116', '116', 'DateChantier', 'ASC');">
Date
</td>
<td width='3' align='right' class='Resizor' onmousedown="javascript:setPosition(event, 'TaBlEaU_Chantiers');" onmouseover="javascript:setResizeColumns('CoLoNnE_Tablo_Chantiers_DateChantier', '12');">
</td>
</tr>
</table>
</td>
<td align='center' id='CoLoNnE_Tablo_Chantiers_SCLibChantier'  width='130px' class='titre' align='center' style='margin: 0px; padding :0px;'>
<table style='color: inherit; width:100%; margin:0px; padding:0px; border-width:0px; table-layout:fixed;' border='0' cellspacing='0' cellpadding='0'>
<tr>
<td align='center' style='overflow:hidden; white-space:nowrap;' oncontextmenu="javascript:clickTitreTableauTablo('SC_ChantiersIncrustes', 'div_englobant_Chantiers', 'LISTE', 'Chantiers');return false;" onClick="javascript:TrierListe('Onglet3TableNumero6', 'Chantiers', '116', '116', 'SCLibChantier', 'ASC');">
Chantier
</td>
<td width='3' align='right' class='Resizor' onmousedown="javascript:setPosition(event, 'TaBlEaU_Chantiers');" onmouseover="javascript:setResizeColumns('CoLoNnE_Tablo_Chantiers_SCLibChantier', '12');">
</td>
</tr>
</table>
</td>
<td align='center' id='CoLoNnE_Tablo_Chantiers_VilleCh'  width='130px' class='titre' align='center' style='margin: 0px; padding :0px;'>
<table style='color: inherit; width:100%; margin:0px; padding:0px; border-width:0px; table-layout:fixed;' border='0' cellspacing='0' cellpadding='0'>
<tr>
<td align='center' style='overflow:hidden; white-space:nowrap;' oncontextmenu="javascript:clickTitreTableauTablo('SC_ChantiersIncrustes', 'div_englobant_Chantiers', 'LISTE', 'Chantiers');return false;" onClick="javascript:TrierListe('Onglet3TableNumero6', 'Chantiers', '116', '116', 'VilleCh', 'ASC');">
Ville
</td>
<td width='3' align='right' class='Resizor' onmousedown="javascript:setPosition(event, 'TaBlEaU_Chantiers');" onmouseover="javascript:setResizeColumns('CoLoNnE_Tablo_Chantiers_VilleCh', '12');">
</td>
</tr>
</table>
</td>
<td align='center' id='CoLoNnE_Tablo_Chantiers_DureeChantier' title="Durée du chantier" width='39px' class='titre' align='center' style='margin: 0px; padding :0px;'>
<table style='color: inherit; width:100%; margin:0px; padding:0px; border-width:0px; table-layout:fixed;' border='0' cellspacing='0' cellpadding='0'>
<tr>
<td align='center' style='overflow:hidden; white-space:nowrap;' oncontextmenu="javascript:clickTitreTableauTablo('SC_ChantiersIncrustes', 'div_englobant_Chantiers', 'LISTE', 'Chantiers');return false;" onClick="javascript:TrierListe('Onglet3TableNumero6', 'Chantiers', '116', '116', 'DureeChantier', 'ASC');">
Durée du chantier
</td>
<td width='3' align='right' class='Resizor' onmousedown="javascript:setPosition(event, 'TaBlEaU_Chantiers');" onmouseover="javascript:setResizeColumns('CoLoNnE_Tablo_Chantiers_DureeChantier', '12');">
</td>
</tr>
</table>
</td>
<td align='center' id='CoLoNnE_Tablo_Chantiers_Commercial'  width='97.5px' class='titre' align='center' style='margin: 0px; padding :0px;'>
<table style='color: inherit; width:100%; margin:0px; padding:0px; border-width:0px; table-layout:fixed;' border='0' cellspacing='0' cellpadding='0'>
<tr>
<td align='center' style='overflow:hidden; white-space:nowrap;' oncontextmenu="javascript:clickTitreTableauTablo('SC_ChantiersIncrustes', 'div_englobant_Chantiers', 'LISTE', 'Chantiers');return false;" onClick="javascript:TrierListe('Onglet3TableNumero6', 'Chantiers', '116', '116', 'Commercial', 'ASC');">
Commercial
</td>
<td width='3' align='right' class='Resizor' onmousedown="javascript:setPosition(event, 'TaBlEaU_Chantiers');" onmouseover="javascript:setResizeColumns('CoLoNnE_Tablo_Chantiers_Commercial', '12');">
</td>
</tr>
</table>
</td>
<td align='center' id='CoLoNnE_Tablo_Chantiers_Etat'  width='91px' class='titre' align='center' style='margin: 0px; padding :0px;'>
<table style='color: inherit; width:100%; margin:0px; padding:0px; border-width:0px; table-layout:fixed;' border='0' cellspacing='0' cellpadding='0'>
<tr>
<td align='center' style='overflow:hidden; white-space:nowrap;' oncontextmenu="javascript:clickTitreTableauTablo('SC_ChantiersIncrustes', 'div_englobant_Chantiers', 'LISTE', 'Chantiers');return false;" onClick="javascript:TrierListe('Onglet3TableNumero6', 'Chantiers', '116', '116', 'Etat', 'ASC');">
Etat
</td>
<td width='3' align='right' class='Resizor' onmousedown="javascript:setPosition(event, 'TaBlEaU_Chantiers');" onmouseover="javascript:setResizeColumns('CoLoNnE_Tablo_Chantiers_Etat', '12');">
</td>
</tr>
</table>
</td>
</tr>
</thead></table>
</div>
</div>
</td>
</table></td></tr>
</table>
<table id='Onglet3TableNumero7' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:331.66666666667px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet3TableNumero7SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_Devis' class='CelLib' style='width:128.33px;'>
Devis
</td>
<td id='cellule_attr_Devis' data-tableau='Onglet3TableNumero7' style='vertical-align:top;'>
<div id='div_englobant_Devis' style='width:565.5px;   padding:0; margin:0; border-width:0px; overflow: none; height:124px;' onMouseOver="javascript:changeZindexManuel('Onglet3TableNumero7', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet3TableNumero7', '');">
<div class='MenuMini' style=';'>
<table cellpadding='0' cellspacing='2' border='0' style='padding:0px;'>
<tr>
<td class='BoutonMenuOffMini' onmouseover="javascript:changeClasseBoutonMenu(this, 'Devis', 'Devis_masque_nouveau', 'BoutonMenuOnMini');" onmouseout="javascript:changeClasseBoutonMenu(this, 'Devis', 'Devis_masque_nouveau', 'BoutonMenuOffMini');" onMouseDown="javascript:changeClasseBoutonMenu(this, 'Devis', 'Devis_masque_nouveau', 'BoutonMenuClickMini'); OuvreElementTableDist('Devis', '', 'Id>IdDossier;Reference>DossierRef;TypeSinistre>TypeSinistre;NomRisque>DossierNomRisque;NoClient>NoClient;NomPrenom>NomPrenom;Prefixe>Prefixe;Adresse1>Adresse1;Adresse2>Adresse2;CP>CP;Ville>Ville;Pays>Pays;Email>Email;Tel>Tel;TeP>TeP;TypeClient>TypeClient;Fax>Fax;Responsable>Commercial;Sigle>Sigle;NomLivr>NomPreLivr;Adr1Livr>Adr1Livr;Adr2Livr>Adr2Livr;CLivr>CLivr;VilLivr>VilLivr;TLivr>TLivr;DeuxTLivr>DeuxTLivr;PortLivr>PortLivr;LivrContact>Interlocuteur;LivrMail>MailLivr;LivrDeuxMail>LivrDeuxMail;LivrPrefixe>PrefLivr;IntLivrContact>IntLivrContact;IntLivrPrefixe>IntLivrPrefixe;IntTLivr>IntTLivr;IntPortLivr>IntPortLivr;IntLivrMail>IntLivrMail;IntLivrDeuxMail>IntLivrDeuxMail;IntFax>IntFax', 'Devis');" onMouseUp="javascript:changeClasseBoutonMenu(this, 'Devis', 'Devis_masque_nouveau', 'BoutonMenuOnMini');">
<img src='images/2016/Icones/nouveau.png' alt='' border='0' style='vertical-align:middle;'>
<img id='Devis_masque_nouveau' border='0' style='vertical-align:middle; display:none; margin-left: -18px; %margin-left: -20px; position: absolute;' src='images/Icones/masque_inactif.gif' class='masqueVerrou' alt=''>
</td>
<td class='BoutonMenuOffMini' onmouseover="javascript:this.className='BoutonMenuOnMini';" onmouseout="javascript:this.className='BoutonMenuOffMini';" onMouseDown="javascript:this.className='BoutonMenuClickMini'; ImprimerDocumentTableDistante('DevisIncrustes', 'Devis');" onMouseUp="javascript:this.className='BoutonMenuOnMini';">
<img src='images/2016/Icones/imprimer.png' alt='' border='0' style='vertical-align:middle;'>
</td>
<td class='BoutonMenuOffAvecSousMenuMini' onmouseover="javascript:this.className='BoutonMenuOnAvecSousMenuMini';document.getElementById('Devis_SousMenuFctOutils').className = 'BoutonSousMenuOnMini'; hoverSurBoutonStyle = true;" onmouseout="javascript:this.className='BoutonMenuOffAvecSousMenuMini';document.getElementById('Devis_SousMenuFctOutils').className = 'BoutonSousMenuOffMini'; hoverSurBoutonStyle = false;" onMouseDown="javascript:this.className='BoutonMenuClickAvecSousMenuMini';" onMouseUp="javascript:this.className='BoutonMenuOnAvecSousMenuMini';">
<table border='0' width='100%' cellpadding='0' cellspacing='0' style='padding:0px; margin:0px; border-collapse:collapse; empty-cells:show;'>
<tr>
<td align='center' valign='middle' class='BoutonMenuAvecSousMenuMini' onClick="javascript:ouvrirMenu('Devis_menuFctOutils', 'Devis_tablePopup_FctOutils');">
<img src='images/2016/Icones/fonctions.png' alt='' border='0' style='vertical-align:middle;'>
</td>
<td align='center' valign='middle' id='Devis_SousMenuFctOutils' class='BoutonSousMenuOffMini' onMouseDown="javascript:this.className='BoutonSousMenuClickMini';" onMouseUp="javascript:this.className='BoutonSousMenuOnMini';" onClick="javascript:ouvrirMenu('Devis_menuFctOutils', 'Devis_tablePopup_FctOutils');">
<img src='images/fleche_bas_menu.png' alt='' style='vertical-align:middle; height:auto;' border='0'>
<div id='Devis_menuFctOutils' class='menuPopup'>
<table id='Devis_tablePopup_FctOutils' class='table_popup_menu' height='100%' border='0' cellpadding='1' cellspacing='0' style='min-width:200px;'>
<tr onMouseDown="javascript:clickTitreTableauTablo('DevisIncrustes', 'div_englobant_Devis', 'LISTE', 'Devis');" style='height:22px;' onMouseOver="javascript:survolMenu('Devis_outils_1', 'ON');" onMouseOut="javascript:survolMenu('Devis_outils_1', 'OFF');">
<td id='Devis_outils_1_g' width='28' style="empty-cells:show; width:28px;" class='menuPopupG'>
</td>
<td id='Devis_outils_1_m' class='menuPopup'>
<nobr>Colonnes affichées ...</nobr>
</td>
<td id='Devis_outils_1_d' width='3' style='empty-cells:show; width:3px;' class='menuPopupD'>
</td>
</tr>
</table>
</div>
</td>
</tr>
</table>
</td>
<td class='BoutonMenuOffMini' onmouseover="javascript:changeClasseBoutonMenu(this, 'Devis', 'Devis_masque_fonction_1', 'BoutonMenuOnMini');" onmouseout="javascript:changeClasseBoutonMenu(this, 'Devis', 'Devis_masque_fonction_1', 'BoutonMenuOffMini');" onMouseDown="javascript:changeClasseBoutonMenu(this, 'Devis', 'Devis_masque_fonction_1', 'BoutonMenuClickMini'); facture_acompte('', '', 'Devis');" onMouseUp="javascript:changeClasseBoutonMenu(this, 'Devis', 'Devis_masque_fonction_1', 'BoutonMenuOnMini');">
<img src='images/2016/Icones/acompte.png' alt='' border='0' style='vertical-align:middle;'>
<img id='Devis_masque_fonction_1' border='0' style='vertical-align:middle; display:none; margin-left: -18px; %margin-left: -20px; position: absolute;' src='images/Icones/masque_inactif.gif' class='masqueVerrou' alt=''>
</td>
</tr>
</table>
</div>
<div id='div_tablo_Devis' class='div_tablo' style='width:563.5px;  padding:0; margin:0; overflow: auto; height:97px;'>
<table border='1' cellpadding='3' class='tableau' id='TaBlEaU_Devis' style='background-color:#ffffff; margin:0;  width:563.5px; '>
<thead><tr id='Tablo_Devis_Ligne0'>
<td class='titre' style='width:16px;  padding:0px; margin:0px;'>
</td>
<td align='center' id='CoLoNnE_Tablo_Devis_NoDocument'  width='52px' class='titre' align='center' style='margin: 0px; padding :0px;'>
<table style='color: inherit; width:100%; margin:0px; padding:0px; border-width:0px; table-layout:fixed;' border='0' cellspacing='0' cellpadding='0'>
<tr>
<td align='center' style='overflow:hidden; white-space:nowrap;' oncontextmenu="javascript:clickTitreTableauTablo('DevisIncrustes', 'div_englobant_Devis', 'LISTE', 'Devis');return false;" onClick="javascript:TrierListe('Onglet3TableNumero7', 'Devis', '116', '116', 'NoDocument', 'ASC');">
Numéro
</td>
<td width='3' align='right' class='Resizor' onmousedown="javascript:setPosition(event, 'TaBlEaU_Devis');" onmouseover="javascript:setResizeColumns('CoLoNnE_Tablo_Devis_NoDocument', '12');">
</td>
</tr>
</table>
</td>
<td align='center' id='CoLoNnE_Tablo_Devis_Date'  width='58.5px' class='titre' align='center' style='margin: 0px; padding :0px;'>
<table style='color: inherit; width:100%; margin:0px; padding:0px; border-width:0px; table-layout:fixed;' border='0' cellspacing='0' cellpadding='0'>
<tr>
<td align='center' style='overflow:hidden; white-space:nowrap;' oncontextmenu="javascript:clickTitreTableauTablo('DevisIncrustes', 'div_englobant_Devis', 'LISTE', 'Devis');return false;" onClick="javascript:TrierListe('Onglet3TableNumero7', 'Devis', '116', '116', 'Date', 'ASC');">
Date
</td>
<td width='3' align='right' class='Resizor' onmousedown="javascript:setPosition(event, 'TaBlEaU_Devis');" onmouseover="javascript:setResizeColumns('CoLoNnE_Tablo_Devis_Date', '12');">
</td>
</tr>
</table>
</td>
<td align='center' id='CoLoNnE_Tablo_Devis_Commercial'  width='52px' class='titre' align='center' style='margin: 0px; padding :0px;'>
<table style='color: inherit; width:100%; margin:0px; padding:0px; border-width:0px; table-layout:fixed;' border='0' cellspacing='0' cellpadding='0'>
<tr>
<td align='center' style='overflow:hidden; white-space:nowrap;' oncontextmenu="javascript:clickTitreTableauTablo('DevisIncrustes', 'div_englobant_Devis', 'LISTE', 'Devis');return false;" onClick="javascript:TrierListe('Onglet3TableNumero7', 'Devis', '116', '116', 'Commercial', 'ASC');">
Commercial
</td>
<td width='3' align='right' class='Resizor' onmousedown="javascript:setPosition(event, 'TaBlEaU_Devis');" onmouseover="javascript:setResizeColumns('CoLoNnE_Tablo_Devis_Commercial', '12');">
</td>
</tr>
</table>
</td>
<td align='center' id='CoLoNnE_Tablo_Devis_TotalHT'  width='65px' class='titre' align='center' style='margin: 0px; padding :0px;'>
<table style='color: inherit; width:100%; margin:0px; padding:0px; border-width:0px; table-layout:fixed;' border='0' cellspacing='0' cellpadding='0'>
<tr>
<td align='center' style='overflow:hidden; white-space:nowrap;' oncontextmenu="javascript:clickTitreTableauTablo('DevisIncrustes', 'div_englobant_Devis', 'LISTE', 'Devis');return false;" onClick="javascript:TrierListe('Onglet3TableNumero7', 'Devis', '116', '116', 'TotalHT', 'ASC');">
Total HT
</td>
<td width='3' align='right' class='Resizor' onmousedown="javascript:setPosition(event, 'TaBlEaU_Devis');" onmouseover="javascript:setResizeColumns('CoLoNnE_Tablo_Devis_TotalHT', '12');">
</td>
</tr>
</table>
</td>
<td align='center' id='CoLoNnE_Tablo_Devis_TotalTTC'  width='65px' class='titre' align='center' style='margin: 0px; padding :0px;'>
<table style='color: inherit; width:100%; margin:0px; padding:0px; border-width:0px; table-layout:fixed;' border='0' cellspacing='0' cellpadding='0'>
<tr>
<td align='center' style='overflow:hidden; white-space:nowrap;' oncontextmenu="javascript:clickTitreTableauTablo('DevisIncrustes', 'div_englobant_Devis', 'LISTE', 'Devis');return false;" onClick="javascript:TrierListe('Onglet3TableNumero7', 'Devis', '116', '116', 'TotalTTC', 'ASC');">
Total TTC
</td>
<td width='3' align='right' class='Resizor' onmousedown="javascript:setPosition(event, 'TaBlEaU_Devis');" onmouseover="javascript:setResizeColumns('CoLoNnE_Tablo_Devis_TotalTTC', '12');">
</td>
</tr>
</table>
</td>
<td align='center' id='CoLoNnE_Tablo_Devis_Etat'  width='84.5px' class='titre' align='center' style='margin: 0px; padding :0px;'>
<table style='color: inherit; width:100%; margin:0px; padding:0px; border-width:0px; table-layout:fixed;' border='0' cellspacing='0' cellpadding='0'>
<tr>
<td align='center' style='overflow:hidden; white-space:nowrap;' oncontextmenu="javascript:clickTitreTableauTablo('DevisIncrustes', 'div_englobant_Devis', 'LISTE', 'Devis');return false;" onClick="javascript:TrierListe('Onglet3TableNumero7', 'Devis', '116', '116', 'Etat', 'ASC');">
Etat
</td>
<td width='3' align='right' class='Resizor' onmousedown="javascript:setPosition(event, 'TaBlEaU_Devis');" onmouseover="javascript:setResizeColumns('CoLoNnE_Tablo_Devis_Etat', '12');">
</td>
</tr>
</table>
</td>
<td align='center' id='CoLoNnE_Tablo_Devis_CommentEtat'  width='162.5px' class='titre' align='center' style='margin: 0px; padding :0px;'>
<table style='color: inherit; width:100%; margin:0px; padding:0px; border-width:0px; table-layout:fixed;' border='0' cellspacing='0' cellpadding='0'>
<tr>
<td align='center' style='overflow:hidden; white-space:nowrap;' oncontextmenu="javascript:clickTitreTableauTablo('DevisIncrustes', 'div_englobant_Devis', 'LISTE', 'Devis');return false;" onClick="javascript:TrierListe('Onglet3TableNumero7', 'Devis', '116', '116', 'CommentEtat', 'ASC');">
Commentaire état
</td>
<td width='3' align='right' class='Resizor' onmousedown="javascript:setPosition(event, 'TaBlEaU_Devis');" onmouseover="javascript:setResizeColumns('CoLoNnE_Tablo_Devis_CommentEtat', '12');">
</td>
</tr>
</table>
</td>
</tr>
</thead></table>
</div>
</div>
</td>
</table></td></tr>
</table>
<table id='Onglet3TableNumero8' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:465.66666666667px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet3TableNumero8SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_TotalHTD' class='CelLib' style='width:128.33px;'>
Devis HT
</td>
<td id='cellule_attr_TotalHTD' data-tableau='Onglet3TableNumero8' style='vertical-align:top;'>
<div class='div_champs' title="Total HT des devis" id='div_englobant_TotalHTD' style='border:1px solid #646464;  ' onMouseOver="javascript:changeZindexManuel('Onglet3TableNumero8', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet3TableNumero8', '');">
<input class='champs' autocomplete='off' id='ChampsOnglet_TotalHTD' name='TotalHTD' value="0" type='text' style='width:65px;border-width:0px; text-align:right; '  onBlur="javascript:appliqueFormules('TotalHTD', '116');" onKeyDown="javascript:onKeyDownNumerique(this);" onKeyUp="javascript:onKeyUpNumerique(this);" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
<td id='cellule_unite_TotalHTD' class='CelUnite' style='width:21px;'>
<nobr>&euro;</nobr>
</td>
<td id='cellule_lib_TotalTVAD' class='CelLib' style='padding-left:10px; width:147.33px;'>
TVA Devis
</td>
<td id='cellule_attr_TotalTVAD' data-tableau='Onglet3TableNumero8' style='vertical-align:top;'>
<div class='div_champs' title="Total TVA des devis" id='div_englobant_TotalTVAD' style='border:1px solid #646464;  ' onMouseOver="javascript:changeZindexManuel('Onglet3TableNumero8', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet3TableNumero8', '');">
<input class='champs' autocomplete='off' id='ChampsOnglet_TotalTVAD' name='TotalTVAD' value="0" type='text' style='width:65px;border-width:0px; text-align:right; '  onBlur="javascript:appliqueFormules('TotalTVAD', '116');" onKeyDown="javascript:onKeyDownNumerique(this);" onKeyUp="javascript:onKeyUpNumerique(this);" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
<td id='cellule_unite_TotalTVAD' class='CelUnite' style='width:21px;'>
<nobr>&euro;</nobr>
</td>
<td id='cellule_lib_TotalTTCD' class='CelLib' style='padding-left:10px; width:214px;'>
Devis TTC
</td>
<td id='cellule_attr_TotalTTCD' data-tableau='Onglet3TableNumero8' style='vertical-align:top;'>
<div class='div_champs' title="Total TTC des devis" id='div_englobant_TotalTTCD' style='border:1px solid #646464;  ' onMouseOver="javascript:changeZindexManuel('Onglet3TableNumero8', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet3TableNumero8', '');">
<input class='champs' autocomplete='off' id='ChampsOnglet_TotalTTCD' name='TotalTTCD' value="0" type='text' style='width:65px;border-width:0px; text-align:right; '  onBlur="javascript:appliqueFormules('TotalTTCD', '116');" onKeyDown="javascript:onKeyDownNumerique(this);" onKeyUp="javascript:onKeyUpNumerique(this);" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
<td id='cellule_unite_TotalTTCD' class='CelUnite' style='width:21px;'>
<nobr>&euro;</nobr>
</td>
</table></td></tr>
</table>
<table id='Onglet3TableNumero9' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:492.33333333333px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet3TableNumero9SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_Commandes' class='CelLib' style='width:128.33px;'>
Commandes
</td>
<td id='cellule_attr_Commandes' data-tableau='Onglet3TableNumero9' style='vertical-align:top;'>
<div id='div_englobant_Commandes' style='width:631.5px;   padding:0; margin:0; border-width:0px; overflow: none; height:124px;' onMouseOver="javascript:changeZindexManuel('Onglet3TableNumero9', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet3TableNumero9', '');">
<div class='MenuMini' style=';'>
<table cellpadding='0' cellspacing='2' border='0' style='padding:0px;'>
<tr>
<td class='BoutonMenuOffMini' onmouseover="javascript:changeClasseBoutonMenu(this, 'Commandes', 'Commandes_masque_nouveau', 'BoutonMenuOnMini');" onmouseout="javascript:changeClasseBoutonMenu(this, 'Commandes', 'Commandes_masque_nouveau', 'BoutonMenuOffMini');" onMouseDown="javascript:changeClasseBoutonMenu(this, 'Commandes', 'Commandes_masque_nouveau', 'BoutonMenuClickMini'); OuvreElementTableDist('CommandesClients', '', 'Id>IdDossier;Reference>DossierRef;NomRisque>DossierNomRisque;NoClient>NoClient;NomPrenom>NomPrenom;Prefixe>Prefixe;Adresse1>Adresse1;Adresse2>Adresse2;CP>CP;Ville>Ville;Pays>Pays;Email>Email;Tel>Tel;TeP>TeP;TypeClient>TypeClient;Fax>Fax;Responsable>Commercial;Sigle>Sigle;NomLivr>NomPreLivr;Adr1Livr>Adr1Livr;Adr2Livr>Adr2Livr;CLivr>CLivr;VilLivr>VilLivr;TLivr>TLivr;DeuxTLivr>DeuxTLivr;PortLivr>PortLivr;LivrContact>Interlocuteur;LivrMail>MailLivr;LivrDeuxMail>LivrDeuxMail;;LivrPrefixe>PrefLivr;IntLivrContact>IntLivrContact;IntLivrPrefixe>IntLivrPrefixe;IntTLivr>IntTLivr;IntPortLivr>IntPortLivr;IntLivrMail>IntLivrMail;IntLivrDeuxMail>IntLivrDeuxMail;IntFax>IntFax', 'Commandes');" onMouseUp="javascript:changeClasseBoutonMenu(this, 'Commandes', 'Commandes_masque_nouveau', 'BoutonMenuOnMini');">
<img src='images/2016/Icones/nouveau.png' alt='' border='0' style='vertical-align:middle;'>
<img id='Commandes_masque_nouveau' border='0' style='vertical-align:middle; display:none; margin-left: -18px; %margin-left: -20px; position: absolute;' src='images/Icones/masque_inactif.gif' class='masqueVerrou' alt=''>
</td>
<td class='BoutonMenuOffMini' onmouseover="javascript:this.className='BoutonMenuOnMini';" onmouseout="javascript:this.className='BoutonMenuOffMini';" onMouseDown="javascript:this.className='BoutonMenuClickMini'; ImprimerDocumentTableDistante('CommandesClientsIncrustees', 'Commandes');" onMouseUp="javascript:this.className='BoutonMenuOnMini';">
<img src='images/2016/Icones/imprimer.png' alt='' border='0' style='vertical-align:middle;'>
</td>
<td class='BoutonMenuOffAvecSousMenuMini' onmouseover="javascript:this.className='BoutonMenuOnAvecSousMenuMini';document.getElementById('Commandes_SousMenuFctOutils').className = 'BoutonSousMenuOnMini'; hoverSurBoutonStyle = true;" onmouseout="javascript:this.className='BoutonMenuOffAvecSousMenuMini';document.getElementById('Commandes_SousMenuFctOutils').className = 'BoutonSousMenuOffMini'; hoverSurBoutonStyle = false;" onMouseDown="javascript:this.className='BoutonMenuClickAvecSousMenuMini';" onMouseUp="javascript:this.className='BoutonMenuOnAvecSousMenuMini';">
<table border='0' width='100%' cellpadding='0' cellspacing='0' style='padding:0px; margin:0px; border-collapse:collapse; empty-cells:show;'>
<tr>
<td align='center' valign='middle' class='BoutonMenuAvecSousMenuMini' onClick="javascript:ouvrirMenu('Commandes_menuFctOutils', 'Commandes_tablePopup_FctOutils');">
<img src='images/2016/Icones/fonctions.png' alt='' border='0' style='vertical-align:middle;'>
</td>
<td align='center' valign='middle' id='Commandes_SousMenuFctOutils' class='BoutonSousMenuOffMini' onMouseDown="javascript:this.className='BoutonSousMenuClickMini';" onMouseUp="javascript:this.className='BoutonSousMenuOnMini';" onClick="javascript:ouvrirMenu('Commandes_menuFctOutils', 'Commandes_tablePopup_FctOutils');">
<img src='images/fleche_bas_menu.png' alt='' style='vertical-align:middle; height:auto;' border='0'>
<div id='Commandes_menuFctOutils' class='menuPopup'>
<table id='Commandes_tablePopup_FctOutils' class='table_popup_menu' height='100%' border='0' cellpadding='1' cellspacing='0' style='min-width:200px;'>
<tr onMouseDown="javascript:clickTitreTableauTablo('CommandesClientsIncrustees', 'div_englobant_Commandes', 'LISTE', 'Commandes');" style='height:22px;' onMouseOver="javascript:survolMenu('Commandes_outils_1', 'ON');" onMouseOut="javascript:survolMenu('Commandes_outils_1', 'OFF');">
<td id='Commandes_outils_1_g' width='28' style="empty-cells:show; width:28px;" class='menuPopupG'>
</td>
<td id='Commandes_outils_1_m' class='menuPopup'>
<nobr>Colonnes affichées ...</nobr>
</td>
<td id='Commandes_outils_1_d' width='3' style='empty-cells:show; width:3px;' class='menuPopupD'>
</td>
</tr>
<tr onMouseDown="javascript:alert('Exporter sous Excel pas encore pris en compte');" style='height:22px;' onMouseOver="javascript:survolMenu('Commandes_outils_2', 'ON');" onMouseOut="javascript:survolMenu('Commandes_outils_2', 'OFF');">
<td id='Commandes_outils_2_g' width='28' style="empty-cells:show; width:28px;" class='menuPopupG'>
</td>
<td id='Commandes_outils_2_m' class='menuPopup'>
<nobr>Exporter sous Excel</nobr>
</td>
<td id='Commandes_outils_2_d' width='3' style='empty-cells:show; width:3px;' class='menuPopupD'>
</td>
</tr>
<tr style='height:8px;'>
<td width='28' style="empty-cells:show; width:28px;" class='menuPopupG'>
</td>
<td colspan='2' style="empty-cells:show; background:url('images/fond_separateur_popup_menu.png') repeat-x left top;">
</td>
</tr>
<tr onMouseDown="javascript:alert('Chercher dans le corps des documents pas encore pris en compte');" style='height:22px;' onMouseOver="javascript:survolMenu('Commandes_outils_4', 'ON');" onMouseOut="javascript:survolMenu('Commandes_outils_4', 'OFF');">
<td id='Commandes_outils_4_g' width='28' style="empty-cells:show; width:28px;" class='menuPopupG'>
</td>
<td id='Commandes_outils_4_m' class='menuPopup'>
<nobr>Chercher dans le corps des documents</nobr>
</td>
<td id='Commandes_outils_4_d' width='3' style='empty-cells:show; width:3px;' class='menuPopupD'>
</td>
</tr>
<tr style='height:8px;'>
<td width='28' style="empty-cells:show; width:28px;" class='menuPopupG'>
</td>
<td colspan='2' style="empty-cells:show; background:url('images/fond_separateur_popup_menu.png') repeat-x left top;">
</td>
</tr>
<tr onMouseDown="javascript:alert('Modifier l état d édition pour la sélection pas encore pris en compte');" style='height:22px;' onMouseOver="javascript:survolMenu('Commandes_outils_6', 'ON');" onMouseOut="javascript:survolMenu('Commandes_outils_6', 'OFF');">
<td id='Commandes_outils_6_g' width='28' style="empty-cells:show; width:28px;" class='menuPopupG'>
</td>
<td id='Commandes_outils_6_m' class='menuPopup'>
<nobr>Modifier l'état d'édition pour la sélection</nobr>
</td>
<td id='Commandes_outils_6_d' width='3' style='empty-cells:show; width:3px;' class='menuPopupD'>
</td>
</tr>
<tr onMouseDown="javascript:alert('Affecter le commercial pour la sélection pas encore pris en compte');" style='height:22px;' onMouseOver="javascript:survolMenu('Commandes_outils_7', 'ON');" onMouseOut="javascript:survolMenu('Commandes_outils_7', 'OFF');">
<td id='Commandes_outils_7_g' width='28' style="empty-cells:show; width:28px;" class='menuPopupG'>
</td>
<td id='Commandes_outils_7_m' class='menuPopup'>
<nobr>Affecter le commercial pour la sélection</nobr>
</td>
<td id='Commandes_outils_7_d' width='3' style='empty-cells:show; width:3px;' class='menuPopupD'>
</td>
</tr>
<tr style='height:8px;'>
<td width='28' style="empty-cells:show; width:28px;" class='menuPopupG'>
</td>
<td colspan='2' style="empty-cells:show; background:url('images/fond_separateur_popup_menu.png') repeat-x left top;">
</td>
</tr>
<tr onMouseDown="javascript:alert('Générer les bons de livraison des commandes sélectionnées pas encore pris en compte');" style='height:22px;' onMouseOver="javascript:survolMenu('Commandes_outils_9', 'ON');" onMouseOut="javascript:survolMenu('Commandes_outils_9', 'OFF');">
<td id='Commandes_outils_9_g' width='28' style="empty-cells:show; width:28px;" class='menuPopupG'>
</td>
<td id='Commandes_outils_9_m' class='menuPopup'>
<nobr>Générer les bons de livraison des commandes sélectionnées</nobr>
</td>
<td id='Commandes_outils_9_d' width='3' style='empty-cells:show; width:3px;' class='menuPopupD'>
</td>
</tr>
<tr onMouseDown="javascript:alert('Générer les factures des commandes sélectionnées pas encore pris en compte');" style='height:22px;' onMouseOver="javascript:survolMenu('Commandes_outils_10', 'ON');" onMouseOut="javascript:survolMenu('Commandes_outils_10', 'OFF');">
<td id='Commandes_outils_10_g' width='28' style="empty-cells:show; width:28px;" class='menuPopupG'>
</td>
<td id='Commandes_outils_10_m' class='menuPopup'>
<nobr>Générer les factures des commandes sélectionnées</nobr>
</td>
<td id='Commandes_outils_10_d' width='3' style='empty-cells:show; width:3px;' class='menuPopupD'>
</td>
</tr>
<tr onMouseDown="javascript:alert('Regrouper les commandes sélectionnées et générer la facture pas encore pris en compte');" style='height:22px;' onMouseOver="javascript:survolMenu('Commandes_outils_11', 'ON');" onMouseOut="javascript:survolMenu('Commandes_outils_11', 'OFF');">
<td id='Commandes_outils_11_g' width='28' style="empty-cells:show; width:28px;" class='menuPopupG'>
</td>
<td id='Commandes_outils_11_m' class='menuPopup'>
<nobr>Regrouper les commandes sélectionnées et générer la facture</nobr>
</td>
<td id='Commandes_outils_11_d' width='3' style='empty-cells:show; width:3px;' class='menuPopupD'>
</td>
</tr>
<tr style='height:8px;'>
<td width='28' style="empty-cells:show; width:28px;" class='menuPopupG'>
</td>
<td colspan='2' style="empty-cells:show; background:url('images/fond_separateur_popup_menu.png') repeat-x left top;">
</td>
</tr>
<tr onMouseDown="javascript:alert('Importer un  projet métré pas encore pris en compte');" style='height:22px;' onMouseOver="javascript:survolMenu('Commandes_outils_13', 'ON');" onMouseOut="javascript:survolMenu('Commandes_outils_13', 'OFF');">
<td id='Commandes_outils_13_g' width='28' style="empty-cells:show; width:28px;" class='menuPopupG'>
</td>
<td id='Commandes_outils_13_m' class='menuPopup'>
<nobr>Importer un  projet métré</nobr>
</td>
<td id='Commandes_outils_13_d' width='3' style='empty-cells:show; width:3px;' class='menuPopupD'>
</td>
</tr>
</table>
</div>
</td>
</tr>
</table>
</td>
<td class='BoutonMenuOffMini' onmouseover="javascript:changeClasseBoutonMenu(this, 'Commandes', 'Commandes_masque_fonction_1', 'BoutonMenuOnMini');" onmouseout="javascript:changeClasseBoutonMenu(this, 'Commandes', 'Commandes_masque_fonction_1', 'BoutonMenuOffMini');" onMouseDown="javascript:changeClasseBoutonMenu(this, 'Commandes', 'Commandes_masque_fonction_1', 'BoutonMenuClickMini'); facture_acompte('', '', 'Commandes');" onMouseUp="javascript:changeClasseBoutonMenu(this, 'Commandes', 'Commandes_masque_fonction_1', 'BoutonMenuOnMini');">
<img src='images/2016/Icones/acompte.png' alt='' border='0' style='vertical-align:middle;'>
<img id='Commandes_masque_fonction_1' border='0' style='vertical-align:middle; display:none; margin-left: -18px; %margin-left: -20px; position: absolute;' src='images/Icones/masque_inactif.gif' class='masqueVerrou' alt=''>
</td>
</tr>
</table>
</div>
<div id='div_tablo_Commandes' class='div_tablo' style='width:629.5px;  padding:0; margin:0; overflow: auto; height:97px;'>
<table border='1' cellpadding='3' class='tableau' id='TaBlEaU_Commandes' style='background-color:#ffffff; margin:0;  width:629.5px; '>
<thead><tr id='Tablo_Commandes_Ligne0'>
<td class='titre' style='width:16px;  padding:0px; margin:0px;'>
</td>
<td align='center' id='CoLoNnE_Tablo_Commandes_NoDocument'  width='52px' class='titre' align='center' style='margin: 0px; padding :0px;'>
<table style='color: inherit; width:100%; margin:0px; padding:0px; border-width:0px; table-layout:fixed;' border='0' cellspacing='0' cellpadding='0'>
<tr>
<td align='center' style='overflow:hidden; white-space:nowrap;' oncontextmenu="javascript:clickTitreTableauTablo('CommandesClientsIncrustees', 'div_englobant_Commandes', 'LISTE', 'Commandes');return false;" onClick="javascript:TrierListe('Onglet3TableNumero9', 'Commandes', '116', '116', 'NoDocument', 'ASC');">
Numéro
</td>
<td width='3' align='right' class='Resizor' onmousedown="javascript:setPosition(event, 'TaBlEaU_Commandes');" onmouseover="javascript:setResizeColumns('CoLoNnE_Tablo_Commandes_NoDocument', '12');">
</td>
</tr>
</table>
</td>
<td align='center' id='CoLoNnE_Tablo_Commandes_Date'  width='58.5px' class='titre' align='center' style='margin: 0px; padding :0px;'>
<table style='color: inherit; width:100%; margin:0px; padding:0px; border-width:0px; table-layout:fixed;' border='0' cellspacing='0' cellpadding='0'>
<tr>
<td align='center' style='overflow:hidden; white-space:nowrap;' oncontextmenu="javascript:clickTitreTableauTablo('CommandesClientsIncrustees', 'div_englobant_Commandes', 'LISTE', 'Commandes');return false;" onClick="javascript:TrierListe('Onglet3TableNumero9', 'Commandes', '116', '116', 'Date', 'ASC');">
Date
</td>
<td width='3' align='right' class='Resizor' onmousedown="javascript:setPosition(event, 'TaBlEaU_Commandes');" onmouseover="javascript:setResizeColumns('CoLoNnE_Tablo_Commandes_Date', '12');">
</td>
</tr>
</table>
</td>
<td align='center' id='CoLoNnE_Tablo_Commandes_Commercial'  width='52px' class='titre' align='center' style='margin: 0px; padding :0px;'>
<table style='color: inherit; width:100%; margin:0px; padding:0px; border-width:0px; table-layout:fixed;' border='0' cellspacing='0' cellpadding='0'>
<tr>
<td align='center' style='overflow:hidden; white-space:nowrap;' oncontextmenu="javascript:clickTitreTableauTablo('CommandesClientsIncrustees', 'div_englobant_Commandes', 'LISTE', 'Commandes');return false;" onClick="javascript:TrierListe('Onglet3TableNumero9', 'Commandes', '116', '116', 'Commercial', 'ASC');">
Commercial
</td>
<td width='3' align='right' class='Resizor' onmousedown="javascript:setPosition(event, 'TaBlEaU_Commandes');" onmouseover="javascript:setResizeColumns('CoLoNnE_Tablo_Commandes_Commercial', '12');">
</td>
</tr>
</table>
</td>
<td align='center' id='CoLoNnE_Tablo_Commandes_TotalHT'  width='65px' class='titre' align='center' style='margin: 0px; padding :0px;'>
<table style='color: inherit; width:100%; margin:0px; padding:0px; border-width:0px; table-layout:fixed;' border='0' cellspacing='0' cellpadding='0'>
<tr>
<td align='center' style='overflow:hidden; white-space:nowrap;' oncontextmenu="javascript:clickTitreTableauTablo('CommandesClientsIncrustees', 'div_englobant_Commandes', 'LISTE', 'Commandes');return false;" onClick="javascript:TrierListe('Onglet3TableNumero9', 'Commandes', '116', '116', 'TotalHT', 'ASC');">
Total HT
</td>
<td width='3' align='right' class='Resizor' onmousedown="javascript:setPosition(event, 'TaBlEaU_Commandes');" onmouseover="javascript:setResizeColumns('CoLoNnE_Tablo_Commandes_TotalHT', '12');">
</td>
</tr>
</table>
</td>
<td align='center' id='CoLoNnE_Tablo_Commandes_TotalTTC'  width='65px' class='titre' align='center' style='margin: 0px; padding :0px;'>
<table style='color: inherit; width:100%; margin:0px; padding:0px; border-width:0px; table-layout:fixed;' border='0' cellspacing='0' cellpadding='0'>
<tr>
<td align='center' style='overflow:hidden; white-space:nowrap;' oncontextmenu="javascript:clickTitreTableauTablo('CommandesClientsIncrustees', 'div_englobant_Commandes', 'LISTE', 'Commandes');return false;" onClick="javascript:TrierListe('Onglet3TableNumero9', 'Commandes', '116', '116', 'TotalTTC', 'ASC');">
Total TTC
</td>
<td width='3' align='right' class='Resizor' onmousedown="javascript:setPosition(event, 'TaBlEaU_Commandes');" onmouseover="javascript:setResizeColumns('CoLoNnE_Tablo_Commandes_TotalTTC', '12');">
</td>
</tr>
</table>
</td>
<td align='center' id='CoLoNnE_Tablo_Commandes_Etat'  width='84.5px' class='titre' align='center' style='margin: 0px; padding :0px;'>
<table style='color: inherit; width:100%; margin:0px; padding:0px; border-width:0px; table-layout:fixed;' border='0' cellspacing='0' cellpadding='0'>
<tr>
<td align='center' style='overflow:hidden; white-space:nowrap;' oncontextmenu="javascript:clickTitreTableauTablo('CommandesClientsIncrustees', 'div_englobant_Commandes', 'LISTE', 'Commandes');return false;" onClick="javascript:TrierListe('Onglet3TableNumero9', 'Commandes', '116', '116', 'Etat', 'ASC');">
Etat
</td>
<td width='3' align='right' class='Resizor' onmousedown="javascript:setPosition(event, 'TaBlEaU_Commandes');" onmouseover="javascript:setResizeColumns('CoLoNnE_Tablo_Commandes_Etat', '12');">
</td>
</tr>
</table>
</td>
<td align='center' id='CoLoNnE_Tablo_Commandes_CommentEtat'  width='162.5px' class='titre' align='center' style='margin: 0px; padding :0px;'>
<table style='color: inherit; width:100%; margin:0px; padding:0px; border-width:0px; table-layout:fixed;' border='0' cellspacing='0' cellpadding='0'>
<tr>
<td align='center' style='overflow:hidden; white-space:nowrap;' oncontextmenu="javascript:clickTitreTableauTablo('CommandesClientsIncrustees', 'div_englobant_Commandes', 'LISTE', 'Commandes');return false;" onClick="javascript:TrierListe('Onglet3TableNumero9', 'Commandes', '116', '116', 'CommentEtat', 'ASC');">
Commentaire état
</td>
<td width='3' align='right' class='Resizor' onmousedown="javascript:setPosition(event, 'TaBlEaU_Commandes');" onmouseover="javascript:setResizeColumns('CoLoNnE_Tablo_Commandes_CommentEtat', '12');">
</td>
</tr>
</table>
</td>
<td align='center' id='CoLoNnE_Tablo_Commandes_DateCommande'  width='65px' class='titre' align='center' style='margin: 0px; padding :0px;'>
<table style='color: inherit; width:100%; margin:0px; padding:0px; border-width:0px; table-layout:fixed;' border='0' cellspacing='0' cellpadding='0'>
<tr>
<td align='center' style='overflow:hidden; white-space:nowrap;' oncontextmenu="javascript:clickTitreTableauTablo('CommandesClientsIncrustees', 'div_englobant_Commandes', 'LISTE', 'Commandes');return false;" onClick="javascript:TrierListe('Onglet3TableNumero9', 'Commandes', '116', '116', 'DateCommande', 'ASC');">
En commande le
</td>
<td width='3' align='right' class='Resizor' onmousedown="javascript:setPosition(event, 'TaBlEaU_Commandes');" onmouseover="javascript:setResizeColumns('CoLoNnE_Tablo_Commandes_DateCommande', '12');">
</td>
</tr>
</table>
</td>
</tr>
</thead></table>
</div>
</div>
</td>
</table></td></tr>
</table>
<table id='Onglet3TableNumero10' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:626.33333333333px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet3TableNumero10SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_TotalHTC' class='CelLib' style='width:128.33px;'>
Commandes HT
</td>
<td id='cellule_attr_TotalHTC' data-tableau='Onglet3TableNumero10' style='vertical-align:top;'>
<div class='div_champs' title="Total HT des commandes client" id='div_englobant_TotalHTC' style='border:1px solid #646464;  ' onMouseOver="javascript:changeZindexManuel('Onglet3TableNumero10', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet3TableNumero10', '');">
<input class='champs' autocomplete='off' id='ChampsOnglet_TotalHTC' name='TotalHTC' value="0" type='text' style='width:65px;border-width:0px; text-align:right; '  onBlur="javascript:appliqueFormules('TotalHTC', '116');" onKeyDown="javascript:onKeyDownNumerique(this);" onKeyUp="javascript:onKeyUpNumerique(this);" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
<td id='cellule_unite_TotalHTC' class='CelUnite' style='width:21px;'>
<nobr>&euro;</nobr>
</td>
</table></td></tr>
</table>
<table id='Onglet3TableNumero11' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:653px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet3TableNumero11SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_Factures' class='CelLib' style='width:128.33px;'>
Factures
</td>
<td id='cellule_attr_Factures' data-tableau='Onglet3TableNumero11' style='vertical-align:top;'>
<div id='div_englobant_Factures' style='width:502.5px;   padding:0; margin:0; border-width:0px; overflow: none; height:124px;' onMouseOver="javascript:changeZindexManuel('Onglet3TableNumero11', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet3TableNumero11', '');">
<div class='MenuMini' style=';'>
<table cellpadding='0' cellspacing='2' border='0' style='padding:0px;'>
<tr>
<td class='BoutonMenuOffMini' onmouseover="javascript:changeClasseBoutonMenu(this, 'Factures', 'Factures_masque_nouveau', 'BoutonMenuOnMini');" onmouseout="javascript:changeClasseBoutonMenu(this, 'Factures', 'Factures_masque_nouveau', 'BoutonMenuOffMini');" onMouseDown="javascript:changeClasseBoutonMenu(this, 'Factures', 'Factures_masque_nouveau', 'BoutonMenuClickMini'); OuvreElementTableDist('Factures', '', 'Id>IdDossier;Reference>DossierRef;NomRisque>DossierNomRisque;NoClient>NoClient;NomPrenom>NomPrenom;Prefixe>Prefixe;Adresse1>Adresse1;Adresse2>Adresse2;CP>CP;Ville>Ville;Pays>Pays;Email>Email;Tel>Tel;TeP>TeP;TypeClient>TypeClient;Fax>Fax;Responsable>Commercial;Sigle>Sigle;NomLivr>NomPreLivr;Adr1Livr>Adr1Livr;Adr2Livr>Adr2Livr;CLivr>CLivr;VilLivr>VilLivr;TLivr>TLivr;DeuxTLivr>DeuxTLivr;PortLivr>PortLivr;LivrContact>Interlocuteur;LivrMail>MailLivr;LivrDeuxMail>LivrDeuxMail;LivrPrefixe>PrefLivr;IntLivrContact>IntLivrContact;IntLivrPrefixe>IntLivrPrefixe;IntTLivr>IntTLivr;IntPortLivr>IntPortLivr;IntLivrMail>IntLivrMail;IntLivrDeuxMail>IntLivrDeuxMail;IntFax>IntFax', 'Factures');" onMouseUp="javascript:changeClasseBoutonMenu(this, 'Factures', 'Factures_masque_nouveau', 'BoutonMenuOnMini');">
<img src='images/2016/Icones/nouveau.png' alt='' border='0' style='vertical-align:middle;'>
<img id='Factures_masque_nouveau' border='0' style='vertical-align:middle; display:none; margin-left: -18px; %margin-left: -20px; position: absolute;' src='images/Icones/masque_inactif.gif' class='masqueVerrou' alt=''>
</td>
<td class='BoutonMenuOffMini' onmouseover="javascript:this.className='BoutonMenuOnMini';" onmouseout="javascript:this.className='BoutonMenuOffMini';" onMouseDown="javascript:this.className='BoutonMenuClickMini'; ImprimerDocumentTableDistante('FacturesIncrustees', 'Factures');" onMouseUp="javascript:this.className='BoutonMenuOnMini';">
<img src='images/2016/Icones/imprimer.png' alt='' border='0' style='vertical-align:middle;'>
</td>
<td class='BoutonMenuOffAvecSousMenuMini' onmouseover="javascript:this.className='BoutonMenuOnAvecSousMenuMini';document.getElementById('Factures_SousMenuFctOutils').className = 'BoutonSousMenuOnMini'; hoverSurBoutonStyle = true;" onmouseout="javascript:this.className='BoutonMenuOffAvecSousMenuMini';document.getElementById('Factures_SousMenuFctOutils').className = 'BoutonSousMenuOffMini'; hoverSurBoutonStyle = false;" onMouseDown="javascript:this.className='BoutonMenuClickAvecSousMenuMini';" onMouseUp="javascript:this.className='BoutonMenuOnAvecSousMenuMini';">
<table border='0' width='100%' cellpadding='0' cellspacing='0' style='padding:0px; margin:0px; border-collapse:collapse; empty-cells:show;'>
<tr>
<td align='center' valign='middle' class='BoutonMenuAvecSousMenuMini' onClick="javascript:ouvrirMenu('Factures_menuFctOutils', 'Factures_tablePopup_FctOutils');">
<img src='images/2016/Icones/fonctions.png' alt='' border='0' style='vertical-align:middle;'>
</td>
<td align='center' valign='middle' id='Factures_SousMenuFctOutils' class='BoutonSousMenuOffMini' onMouseDown="javascript:this.className='BoutonSousMenuClickMini';" onMouseUp="javascript:this.className='BoutonSousMenuOnMini';" onClick="javascript:ouvrirMenu('Factures_menuFctOutils', 'Factures_tablePopup_FctOutils');">
<img src='images/fleche_bas_menu.png' alt='' style='vertical-align:middle; height:auto;' border='0'>
<div id='Factures_menuFctOutils' class='menuPopup'>
<table id='Factures_tablePopup_FctOutils' class='table_popup_menu' height='100%' border='0' cellpadding='1' cellspacing='0' style='min-width:200px;'>
<tr onMouseDown="javascript:clickTitreTableauTablo('FacturesIncrustees', 'div_englobant_Factures', 'LISTE', 'Factures');" style='height:22px;' onMouseOver="javascript:survolMenu('Factures_outils_1', 'ON');" onMouseOut="javascript:survolMenu('Factures_outils_1', 'OFF');">
<td id='Factures_outils_1_g' width='28' style="empty-cells:show; width:28px;" class='menuPopupG'>
</td>
<td id='Factures_outils_1_m' class='menuPopup'>
<nobr>Colonnes affichées ...</nobr>
</td>
<td id='Factures_outils_1_d' width='3' style='empty-cells:show; width:3px;' class='menuPopupD'>
</td>
</tr>
</table>
</div>
</td>
</tr>
</table>
</td>
</tr>
</table>
</div>
<div id='div_tablo_Factures' class='div_tablo' style='width:500.5px;  padding:0; margin:0; overflow: auto; height:97px;'>
<table border='1' cellpadding='3' class='tableau' id='TaBlEaU_Factures' style='background-color:#ffffff; margin:0;  width:500.5px; '>
<thead><tr id='Tablo_Factures_Ligne0'>
<td class='titre' style='width:16px;  padding:0px; margin:0px;'>
</td>
<td align='center' id='CoLoNnE_Tablo_Factures_NoDocument' title="Numéro du document" width='52px' class='titre' align='center' style='margin: 0px; padding :0px;'>
<table style='color: inherit; width:100%; margin:0px; padding:0px; border-width:0px; table-layout:fixed;' border='0' cellspacing='0' cellpadding='0'>
<tr>
<td align='center' style='overflow:hidden; white-space:nowrap;' oncontextmenu="javascript:clickTitreTableauTablo('FacturesIncrustees', 'div_englobant_Factures', 'LISTE', 'Factures');return false;" onClick="javascript:TrierListe('Onglet3TableNumero11', 'Factures', '116', '116', 'NoDocument', 'ASC');">
Numéro
</td>
<td width='3' align='right' class='Resizor' onmousedown="javascript:setPosition(event, 'TaBlEaU_Factures');" onmouseover="javascript:setResizeColumns('CoLoNnE_Tablo_Factures_NoDocument', '12');">
</td>
</tr>
</table>
</td>
<td align='center' id='CoLoNnE_Tablo_Factures_Date'  width='58.5px' class='titre' align='center' style='margin: 0px; padding :0px;'>
<table style='color: inherit; width:100%; margin:0px; padding:0px; border-width:0px; table-layout:fixed;' border='0' cellspacing='0' cellpadding='0'>
<tr>
<td align='center' style='overflow:hidden; white-space:nowrap;' oncontextmenu="javascript:clickTitreTableauTablo('FacturesIncrustees', 'div_englobant_Factures', 'LISTE', 'Factures');return false;" onClick="javascript:TrierListe('Onglet3TableNumero11', 'Factures', '116', '116', 'Date', 'ASC');">
Date
</td>
<td width='3' align='right' class='Resizor' onmousedown="javascript:setPosition(event, 'TaBlEaU_Factures');" onmouseover="javascript:setResizeColumns('CoLoNnE_Tablo_Factures_Date', '12');">
</td>
</tr>
</table>
</td>
<td align='center' id='CoLoNnE_Tablo_Factures_Commercial'  width='52px' class='titre' align='center' style='margin: 0px; padding :0px;'>
<table style='color: inherit; width:100%; margin:0px; padding:0px; border-width:0px; table-layout:fixed;' border='0' cellspacing='0' cellpadding='0'>
<tr>
<td align='center' style='overflow:hidden; white-space:nowrap;' oncontextmenu="javascript:clickTitreTableauTablo('FacturesIncrustees', 'div_englobant_Factures', 'LISTE', 'Factures');return false;" onClick="javascript:TrierListe('Onglet3TableNumero11', 'Factures', '116', '116', 'Commercial', 'ASC');">
Commercial
</td>
<td width='3' align='right' class='Resizor' onmousedown="javascript:setPosition(event, 'TaBlEaU_Factures');" onmouseover="javascript:setResizeColumns('CoLoNnE_Tablo_Factures_Commercial', '12');">
</td>
</tr>
</table>
</td>
<td align='center' id='CoLoNnE_Tablo_Factures_TotalHT'  width='65px' class='titre' align='center' style='margin: 0px; padding :0px;'>
<table style='color: inherit; width:100%; margin:0px; padding:0px; border-width:0px; table-layout:fixed;' border='0' cellspacing='0' cellpadding='0'>
<tr>
<td align='center' style='overflow:hidden; white-space:nowrap;' oncontextmenu="javascript:clickTitreTableauTablo('FacturesIncrustees', 'div_englobant_Factures', 'LISTE', 'Factures');return false;" onClick="javascript:TrierListe('Onglet3TableNumero11', 'Factures', '116', '116', 'TotalHT', 'ASC');">
Total HT
</td>
<td width='3' align='right' class='Resizor' onmousedown="javascript:setPosition(event, 'TaBlEaU_Factures');" onmouseover="javascript:setResizeColumns('CoLoNnE_Tablo_Factures_TotalHT', '12');">
</td>
</tr>
</table>
</td>
<td align='center' id='CoLoNnE_Tablo_Factures_TotalTTC'  width='65px' class='titre' align='center' style='margin: 0px; padding :0px;'>
<table style='color: inherit; width:100%; margin:0px; padding:0px; border-width:0px; table-layout:fixed;' border='0' cellspacing='0' cellpadding='0'>
<tr>
<td align='center' style='overflow:hidden; white-space:nowrap;' oncontextmenu="javascript:clickTitreTableauTablo('FacturesIncrustees', 'div_englobant_Factures', 'LISTE', 'Factures');return false;" onClick="javascript:TrierListe('Onglet3TableNumero11', 'Factures', '116', '116', 'TotalTTC', 'ASC');">
Total TTC
</td>
<td width='3' align='right' class='Resizor' onmousedown="javascript:setPosition(event, 'TaBlEaU_Factures');" onmouseover="javascript:setResizeColumns('CoLoNnE_Tablo_Factures_TotalTTC', '12');">
</td>
</tr>
</table>
</td>
<td align='center' id='CoLoNnE_Tablo_Factures_ResteTTC'  width='65px' class='titre' align='center' style='margin: 0px; padding :0px;'>
<table style='color: inherit; width:100%; margin:0px; padding:0px; border-width:0px; table-layout:fixed;' border='0' cellspacing='0' cellpadding='0'>
<tr>
<td align='center' style='overflow:hidden; white-space:nowrap;' oncontextmenu="javascript:clickTitreTableauTablo('FacturesIncrustees', 'div_englobant_Factures', 'LISTE', 'Factures');return false;" onClick="javascript:TrierListe('Onglet3TableNumero11', 'Factures', '116', '116', 'ResteTTC', 'ASC');">
Reste à payer
</td>
<td width='3' align='right' class='Resizor' onmousedown="javascript:setPosition(event, 'TaBlEaU_Factures');" onmouseover="javascript:setResizeColumns('CoLoNnE_Tablo_Factures_ResteTTC', '12');">
</td>
</tr>
</table>
</td>
<td align='center' id='CoLoNnE_Tablo_Factures_Etat'  width='78px' class='titre' align='center' style='margin: 0px; padding :0px;'>
<table style='color: inherit; width:100%; margin:0px; padding:0px; border-width:0px; table-layout:fixed;' border='0' cellspacing='0' cellpadding='0'>
<tr>
<td align='center' style='overflow:hidden; white-space:nowrap;' oncontextmenu="javascript:clickTitreTableauTablo('FacturesIncrustees', 'div_englobant_Factures', 'LISTE', 'Factures');return false;" onClick="javascript:TrierListe('Onglet3TableNumero11', 'Factures', '116', '116', 'Etat', 'ASC');">
Etat
</td>
<td width='3' align='right' class='Resizor' onmousedown="javascript:setPosition(event, 'TaBlEaU_Factures');" onmouseover="javascript:setResizeColumns('CoLoNnE_Tablo_Factures_Etat', '12');">
</td>
</tr>
</table>
</td>
<td align='center' id='CoLoNnE_Tablo_Factures_AlertePaye' title="Alerte payé" width='19.5px' class='titre' align='center' style='margin: 0px; padding :0px;'>
<table style='color: inherit; width:100%; margin:0px; padding:0px; border-width:0px; table-layout:fixed;' border='0' cellspacing='0' cellpadding='0'>
<tr>
<td align='center' style='overflow:hidden; white-space:nowrap;' oncontextmenu="javascript:clickTitreTableauTablo('FacturesIncrustees', 'div_englobant_Factures', 'LISTE', 'Factures');return false;" onClick="javascript:TrierListe('Onglet3TableNumero11', 'Factures', '116', '116', 'AlertePaye', 'ASC');">
P
</td>
<td width='3' align='right' class='Resizor' onmousedown="javascript:setPosition(event, 'TaBlEaU_Factures');" onmouseover="javascript:setResizeColumns('CoLoNnE_Tablo_Factures_AlertePaye', '12');">
</td>
</tr>
</table>
</td>
<td align='center' id='CoLoNnE_Tablo_Factures_AlerteEcheance'  width='19.5px' class='titre' align='center' style='margin: 0px; padding :0px;'>
<table style='color: inherit; width:100%; margin:0px; padding:0px; border-width:0px; table-layout:fixed;' border='0' cellspacing='0' cellpadding='0'>
<tr>
<td align='center' style='overflow:hidden; white-space:nowrap;' oncontextmenu="javascript:clickTitreTableauTablo('FacturesIncrustees', 'div_englobant_Factures', 'LISTE', 'Factures');return false;" onClick="javascript:TrierListe('Onglet3TableNumero11', 'Factures', '116', '116', 'AlerteEcheance', 'ASC');">
E
</td>
<td width='3' align='right' class='Resizor' onmousedown="javascript:setPosition(event, 'TaBlEaU_Factures');" onmouseover="javascript:setResizeColumns('CoLoNnE_Tablo_Factures_AlerteEcheance', '12');">
</td>
</tr>
</table>
</td>
</tr>
</thead></table>
</div>
</div>
</td>
</table></td></tr>
</table>
<table id='Onglet3TableNumero12' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:787px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet3TableNumero12SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_TotalHTF' class='CelLib' style='width:128.33px;'>
Factures HT
</td>
<td id='cellule_attr_TotalHTF' data-tableau='Onglet3TableNumero12' style='vertical-align:top;'>
<div class='div_champs' title="Total HT des factures" id='div_englobant_TotalHTF' style='border:1px solid #646464;  ' onMouseOver="javascript:changeZindexManuel('Onglet3TableNumero12', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet3TableNumero12', '');">
<input class='champs' autocomplete='off' id='ChampsOnglet_TotalHTF' name='TotalHTF' value="0" type='text' style='width:65px;border-width:0px; text-align:right; '  onBlur="javascript:appliqueFormules('TotalHTF', '116');" onKeyDown="javascript:onKeyDownNumerique(this);" onKeyUp="javascript:onKeyUpNumerique(this);" onFocus="javascript:select(); valeurInputEnCours=this.value;"></div>
</td>
<td id='cellule_unite_TotalHTF' class='CelUnite' style='width:21px;'>
<nobr>&euro;</nobr>
</td>
<input id='ChampsOnglet_SigChargeRecon' name='SigChargeRecon' value="" type='hidden'>
</table></td></tr>
</table>
</div>
<div id='div_Pièces jointes (_NbDocClas)' class='fond_interface_elmt' style='position:relative; display:none; overflow:none; width:1311.33px;  height:855.66666666667px; '>
<table id='Onglet4TableNumero1' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:19.333333333333px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;' id='table_etiquette_ClasseursPJ'>
<td style='padding-right:5px;  width:115px;'>
</td>
<td style='padding-bottom:10px;'>
<div class='etiquette' style='color:#FFFFFF;  width:140px; '>
<nobr>Classeurs</nobr>
</div>
</td>
</table>
</td>
</tr>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet4TableNumero1SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_ClasseursPJ' class='CelLib' style='width:61.67px;'>
 
</td>
<td id='cellule_attr_ClasseursPJ' data-tableau='Onglet4TableNumero1' style='vertical-align:top;'>
<div id='div_englobant_ClasseursPJ' style='width:515px;   padding:0; margin:0; border-width:0px; overflow: none; height:156px;' onMouseOver="javascript:changeZindexManuel('Onglet4TableNumero1', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet4TableNumero1', '');">
<div class='MenuMini' style=';'>
<table cellpadding='0' cellspacing='2' border='0' style='padding:0px;'>
<tr>
<td class='BoutonMenuOffMini' onmouseover="javascript:changeClasseBoutonMenu(this, 'ClasseursPJ', 'ClasseursPJ_masque_nouveau', 'BoutonMenuOnMini');" onmouseout="javascript:changeClasseBoutonMenu(this, 'ClasseursPJ', 'ClasseursPJ_masque_nouveau', 'BoutonMenuOffMini');" onMouseDown="javascript:changeClasseBoutonMenu(this, 'ClasseursPJ', 'ClasseursPJ_masque_nouveau', 'BoutonMenuClickMini'); OuvreElementTableDist('UP_ClasseursPJ', '', 'Id>IdDossier;NomPrenom>NomPrenom', 'ClasseursPJ');" onMouseUp="javascript:changeClasseBoutonMenu(this, 'ClasseursPJ', 'ClasseursPJ_masque_nouveau', 'BoutonMenuOnMini');">
<img src='images/2016/Icones/nouveau.png' alt='' border='0' style='vertical-align:middle;'>
<img id='ClasseursPJ_masque_nouveau' border='0' style='vertical-align:middle; display:none; margin-left: -18px; %margin-left: -20px; position: absolute;' src='images/Icones/masque_inactif.gif' class='masqueVerrou' alt=''>
</td>
<td class='BoutonMenuOffAvecSousMenuMini' onmouseover="javascript:this.className='BoutonMenuOnAvecSousMenuMini';document.getElementById('ClasseursPJ_SousMenuFctOutils').className = 'BoutonSousMenuOnMini'; hoverSurBoutonStyle = true;" onmouseout="javascript:this.className='BoutonMenuOffAvecSousMenuMini';document.getElementById('ClasseursPJ_SousMenuFctOutils').className = 'BoutonSousMenuOffMini'; hoverSurBoutonStyle = false;" onMouseDown="javascript:this.className='BoutonMenuClickAvecSousMenuMini';" onMouseUp="javascript:this.className='BoutonMenuOnAvecSousMenuMini';">
<table border='0' width='100%' cellpadding='0' cellspacing='0' style='padding:0px; margin:0px; border-collapse:collapse; empty-cells:show;'>
<tr>
<td align='center' valign='middle' class='BoutonMenuAvecSousMenuMini' onClick="javascript:ouvrirMenu('ClasseursPJ_menuFctOutils', 'ClasseursPJ_tablePopup_FctOutils');">
<img src='images/2016/Icones/fonctions.png' alt='' border='0' style='vertical-align:middle;'>
</td>
<td align='center' valign='middle' id='ClasseursPJ_SousMenuFctOutils' class='BoutonSousMenuOffMini' onMouseDown="javascript:this.className='BoutonSousMenuClickMini';" onMouseUp="javascript:this.className='BoutonSousMenuOnMini';" onClick="javascript:ouvrirMenu('ClasseursPJ_menuFctOutils', 'ClasseursPJ_tablePopup_FctOutils');">
<img src='images/fleche_bas_menu.png' alt='' style='vertical-align:middle; height:auto;' border='0'>
<div id='ClasseursPJ_menuFctOutils' class='menuPopup'>
<table id='ClasseursPJ_tablePopup_FctOutils' class='table_popup_menu' height='100%' border='0' cellpadding='1' cellspacing='0' style='min-width:200px;'>
<tr onMouseDown="javascript:clickTitreTableauTablo('UP_ClasseursPJ', 'div_englobant_ClasseursPJ', 'LISTE', 'ClasseursPJ');" style='height:22px;' onMouseOver="javascript:survolMenu('ClasseursPJ_outils_1', 'ON');" onMouseOut="javascript:survolMenu('ClasseursPJ_outils_1', 'OFF');">
<td id='ClasseursPJ_outils_1_g' width='28' style="empty-cells:show; width:28px;" class='menuPopupG'>
</td>
<td id='ClasseursPJ_outils_1_m' class='menuPopup'>
<nobr>Colonnes affichées</nobr>
</td>
<td id='ClasseursPJ_outils_1_d' width='3' style='empty-cells:show; width:3px;' class='menuPopupD'>
</td>
</tr>
</table>
</div>
</td>
</tr>
</table>
</td>
<td class='BoutonMenuOffMini' onmouseover="javascript:changeClasseBoutonMenu(this, 'ClasseursPJ', 'ClasseursPJ_masque_fonction_1', 'BoutonMenuOnMini');" onmouseout="javascript:changeClasseBoutonMenu(this, 'ClasseursPJ', 'ClasseursPJ_masque_fonction_1', 'BoutonMenuOffMini');" onMouseDown="javascript:changeClasseBoutonMenu(this, 'ClasseursPJ', 'ClasseursPJ_masque_fonction_1', 'BoutonMenuClickMini'); supprimerLigneCommentVentes('ClasseursPJ');" onMouseUp="javascript:changeClasseBoutonMenu(this, 'ClasseursPJ', 'ClasseursPJ_masque_fonction_1', 'BoutonMenuOnMini');">
<img src='images/2016/Icones/supprimer.png' alt='' border='0' style='vertical-align:middle;'>
<img id='ClasseursPJ_masque_fonction_1' border='0' style='vertical-align:middle; display:none; margin-left: -18px; %margin-left: -20px; position: absolute;' src='images/Icones/masque_inactif.gif' class='masqueVerrou' alt=''>
</td>
</tr>
</table>
</div>
<div id='div_tablo_ClasseursPJ' class='div_tablo' style='width:513px;  padding:0; margin:0; overflow: auto; height:129px;'>
<table border='1' cellpadding='3' class='tableau' id='TaBlEaU_ClasseursPJ' style='background-color:#ffffff; margin:0;  width:513px; '>
<thead><tr id='Tablo_ClasseursPJ_Ligne0'>
<td class='titre' style='width:16px;  padding:0px; margin:0px;'>
</td>
<td align='center' id='CoLoNnE_Tablo_ClasseursPJ_NomClasseur'  width='455px' class='titre' align='center' style='margin: 0px; padding :0px;'>
<table style='color: inherit; width:100%; margin:0px; padding:0px; border-width:0px; table-layout:fixed;' border='0' cellspacing='0' cellpadding='0'>
<tr>
<td align='center' style='overflow:hidden; white-space:nowrap;'  onClick="javascript:TrierListe('Onglet4TableNumero1', 'ClasseursPJ', '116', '116', 'NomClasseur', 'ASC');">
Nom du classeur
</td>
<td width='3' align='right' class='Resizor' onmousedown="javascript:setPosition(event, 'TaBlEaU_ClasseursPJ');" onmouseover="javascript:setResizeColumns('CoLoNnE_Tablo_ClasseursPJ_NomClasseur', '12');">
</td>
</tr>
</table>
</td>
<td align='center' id='CoLoNnE_Tablo_ClasseursPJ_NbDocs'  width='39px' class='titre' align='center' style='margin: 0px; padding :0px;'>
<table style='color: inherit; width:100%; margin:0px; padding:0px; border-width:0px; table-layout:fixed;' border='0' cellspacing='0' cellpadding='0'>
<tr>
<td align='center' style='overflow:hidden; white-space:nowrap;'  onClick="javascript:TrierListe('Onglet4TableNumero1', 'ClasseursPJ', '116', '116', 'NbDocs', 'ASC');">
Nb docs
</td>
<td width='3' align='right' class='Resizor' onmousedown="javascript:setPosition(event, 'TaBlEaU_ClasseursPJ');" onmouseover="javascript:setResizeColumns('CoLoNnE_Tablo_ClasseursPJ_NbDocs', '12');">
</td>
</tr>
</table>
</td>
</tr>
</thead></table>
</div>
</div>
</td>
<input id='ChampsOnglet_NbDocClas' name='NbDocClas' value="0" type='hidden'>
</table></td></tr>
</table>
</div>
<div id='div_Mails' class='fond_interface_elmt' style='position:relative; display:none; overflow:none; width:1311.33px;  height:855.66666666667px; '>
<table id='Onglet5TableNumero1' border='0' cellspacing='0' cellpadding='0' style='border:0px solid black; border-collapse:collapse; padding:0; margin:0; position:absolute; top:19.333333333333px;'>
<tr>
<td style='padding:0px; margin:0px;'>
<table id='Onglet5TableNumero1SSTableau' border='0' cellspacing='0' cellpadding='0' style='padding:0px; margin:0px;'>
<tr>
<td id='cellule_lib_ListeEmails' class='CelLib' style='width:-5px;'>
 
</td>
<td id='cellule_attr_ListeEmails' data-tableau='Onglet5TableNumero1' style='vertical-align:top;'>
<div id='div_englobant_ListeEmails' style='width:884px;   padding:0; margin:0; border-width:0px; overflow: none; height:476px;' onMouseOver="javascript:changeZindexManuel('Onglet5TableNumero1', 5000);" onMouseOut="javascript:changeZindexManuel('Onglet5TableNumero1', '');">
<div class='MenuMini' style=';'>
<table cellpadding='0' cellspacing='2' border='0' style='padding:0px;'>
<tr>
<td class='BoutonMenuOffMini' onmouseover="javascript:changeClasseBoutonMenu(this, 'ListeEmails', 'ListeEmails_masque_nouveau', 'BoutonMenuOnMini');" onmouseout="javascript:changeClasseBoutonMenu(this, 'ListeEmails', 'ListeEmails_masque_nouveau', 'BoutonMenuOffMini');" onMouseDown="javascript:changeClasseBoutonMenu(this, 'ListeEmails', 'ListeEmails_masque_nouveau', 'BoutonMenuClickMini'); OuvreElementTableDist('MailsEnvoyesDossiers', '', 'NomPrenom>NomPrenom;Email>ToEmail;NoClient>NoClient;Id>AssocieId;AgenceClientGestEmail>AgenceClientGestEmail;AgenceClientEmail>AgenceClientEmail;AgenceClientGardEmail>AgenceClientGardEmail;Exp2AssistEmail>Exp2AssistEmail;Exp2Email>Exp2Email;Exp1Email>Exp1Email;Exp1AssistEmail>Exp1AssistEmail;IntLivrDeuxMail>IntLivrDeuxMail;IntLivrMail>IntLivrMail;AssurFactDeuxEmail>AssurFactDeuxEmail;AssurDeuxEmail>AssurDeuxEmail;AssurFactEmail>AssurFactEmail;AssurEmail>AssurEmail;PlatefGestEmail>PlatefGestEmail;LivrDeuxMail>LivrDeuxMail;LivrMail>LivrMail;PlatefEmail>PlatefEmail;Email>Email;DeuxEmail>DeuxEmail;AgenceClientRaisonSociale>AgenceClientRaisonSociale;AgenceClientGestNomPrenom>AgenceClientGestNomPrenom;AgenceClientGestNomPrenom>AgenceClientGestNomPrenom;AgenceClientGardNomPrenom>AgenceClientGardNomPrenom;Exp1AssistNomPrenom>Exp1AssistNomPrenom;Exp2AssistNomPrenom>Exp2AssistNomPrenom;Exp2NomPrenom>Exp2NomPrenom;Exp1NomPrenom>Exp1NomPrenom;AssurFactNomPrenom>AssurFactNomPrenom;AssurPrenom>AssurPrenom;AssurNomPrenom>AssurNomPrenom;PlatefGestNomPrenom>PlatefGestNomPrenom;NomLivr>NomLivr;IntLivrContact>IntLivrContact', 'ListeEmails');" onMouseUp="javascript:changeClasseBoutonMenu(this, 'ListeEmails', 'ListeEmails_masque_nouveau', 'BoutonMenuOnMini');">
<img src='images/2016/Icones/nouveau.png' alt='' border='0' style='vertical-align:middle;'>
<img id='ListeEmails_masque_nouveau' border='0' style='vertical-align:middle; display:none; margin-left: -18px; %margin-left: -20px; position: absolute;' src='images/Icones/masque_inactif.gif' class='masqueVerrou' alt=''>
</td>
<td class='BoutonMenuOffAvecSousMenuMini' onmouseover="javascript:this.className='BoutonMenuOnAvecSousMenuMini';document.getElementById('ListeEmails_SousMenuFctOutils').className = 'BoutonSousMenuOnMini'; hoverSurBoutonStyle = true;" onmouseout="javascript:this.className='BoutonMenuOffAvecSousMenuMini';document.getElementById('ListeEmails_SousMenuFctOutils').className = 'BoutonSousMenuOffMini'; hoverSurBoutonStyle = false;" onMouseDown="javascript:this.className='BoutonMenuClickAvecSousMenuMini';" onMouseUp="javascript:this.className='BoutonMenuOnAvecSousMenuMini';">
<table border='0' width='100%' cellpadding='0' cellspacing='0' style='padding:0px; margin:0px; border-collapse:collapse; empty-cells:show;'>
<tr>
<td align='center' valign='middle' class='BoutonMenuAvecSousMenuMini' onClick="javascript:ouvrirMenu('ListeEmails_menuFctOutils', 'ListeEmails_tablePopup_FctOutils');">
<img src='images/2016/Icones/fonctions.png' alt='' border='0' style='vertical-align:middle;'>
</td>
<td align='center' valign='middle' id='ListeEmails_SousMenuFctOutils' class='BoutonSousMenuOffMini' onMouseDown="javascript:this.className='BoutonSousMenuClickMini';" onMouseUp="javascript:this.className='BoutonSousMenuOnMini';" onClick="javascript:ouvrirMenu('ListeEmails_menuFctOutils', 'ListeEmails_tablePopup_FctOutils');">
<img src='images/fleche_bas_menu.png' alt='' style='vertical-align:middle; height:auto;' border='0'>
<div id='ListeEmails_menuFctOutils' class='menuPopup'>
<table id='ListeEmails_tablePopup_FctOutils' class='table_popup_menu' height='100%' border='0' cellpadding='1' cellspacing='0' style='min-width:200px;'>
<tr onMouseDown="javascript:clickTitreTableauTablo('MailsEnvoyesDossiers', 'div_englobant_ListeEmails', 'LISTE', 'ListeEmails');" style='height:22px;' onMouseOver="javascript:survolMenu('ListeEmails_outils_1', 'ON');" onMouseOut="javascript:survolMenu('ListeEmails_outils_1', 'OFF');">
<td id='ListeEmails_outils_1_g' width='28' style="empty-cells:show; width:28px;" class='menuPopupG'>
</td>
<td id='ListeEmails_outils_1_m' class='menuPopup'>
<nobr>Colonnes affichées</nobr>
</td>
<td id='ListeEmails_outils_1_d' width='3' style='empty-cells:show; width:3px;' class='menuPopupD'>
</td>
</tr>
</table>
</div>
</td>
</tr>
</table>
</td>
</tr>
</table>
</div>
<div id='div_tablo_ListeEmails' class='div_tablo' style='width:882px;  padding:0; margin:0; overflow: auto; height:449px;'>
<table border='1' cellpadding='3' class='tableau' id='TaBlEaU_ListeEmails' style='background-color:#ffffff; margin:0;  width:882px; '>
<thead><tr id='Tablo_ListeEmails_Ligne0'>
<td class='titre' style='width:16px;  padding:0px; margin:0px;'>
</td>
<td align='center' id='CoLoNnE_Tablo_ListeEmails_Date'  width='58.5px' class='titre' align='center' style='margin: 0px; padding :0px;'>
<table style='color: inherit; width:100%; margin:0px; padding:0px; border-width:0px; table-layout:fixed;' border='0' cellspacing='0' cellpadding='0'>
<tr>
<td align='center' style='overflow:hidden; white-space:nowrap;' oncontextmenu="javascript:clickTitreTableauTablo('MailsEnvoyesDossiers', 'div_englobant_ListeEmails', 'LISTE', 'ListeEmails');return false;" onClick="javascript:TrierListe('Onglet5TableNumero1', 'ListeEmails', '116', '116', 'Date', 'ASC');">
Date
</td>
<td width='3' align='right' class='Resizor' onmousedown="javascript:setPosition(event, 'TaBlEaU_ListeEmails');" onmouseover="javascript:setResizeColumns('CoLoNnE_Tablo_ListeEmails_Date', '12');">
</td>
</tr>
</table>
</td>
<td align='center' id='CoLoNnE_Tablo_ListeEmails_Utilisateur'  width='65px' class='titre' align='center' style='margin: 0px; padding :0px;'>
<table style='color: inherit; width:100%; margin:0px; padding:0px; border-width:0px; table-layout:fixed;' border='0' cellspacing='0' cellpadding='0'>
<tr>
<td align='center' style='overflow:hidden; white-space:nowrap;' oncontextmenu="javascript:clickTitreTableauTablo('MailsEnvoyesDossiers', 'div_englobant_ListeEmails', 'LISTE', 'ListeEmails');return false;" onClick="javascript:TrierListe('Onglet5TableNumero1', 'ListeEmails', '116', '116', 'Utilisateur', 'ASC');">
Utilisateur
</td>
<td width='3' align='right' class='Resizor' onmousedown="javascript:setPosition(event, 'TaBlEaU_ListeEmails');" onmouseover="javascript:setResizeColumns('CoLoNnE_Tablo_ListeEmails_Utilisateur', '12');">
</td>
</tr>
</table>
</td>
<td align='center' id='CoLoNnE_Tablo_ListeEmails_TableOrigine'  width='91px' class='titre' align='center' style='margin: 0px; padding :0px;'>
<table style='color: inherit; width:100%; margin:0px; padding:0px; border-width:0px; table-layout:fixed;' border='0' cellspacing='0' cellpadding='0'>
<tr>
<td align='center' style='overflow:hidden; white-space:nowrap;' oncontextmenu="javascript:clickTitreTableauTablo('MailsEnvoyesDossiers', 'div_englobant_ListeEmails', 'LISTE', 'ListeEmails');return false;" onClick="javascript:TrierListe('Onglet5TableNumero1', 'ListeEmails', '116', '116', 'TableOrigine', 'ASC');">
Origine
</td>
<td width='3' align='right' class='Resizor' onmousedown="javascript:setPosition(event, 'TaBlEaU_ListeEmails');" onmouseover="javascript:setResizeColumns('CoLoNnE_Tablo_ListeEmails_TableOrigine', '12');">
</td>
</tr>
</table>
</td>
<td align='center' id='CoLoNnE_Tablo_ListeEmails_ListeDestinataires'  width='260px' class='titre' align='center' style='margin: 0px; padding :0px;'>
<table style='color: inherit; width:100%; margin:0px; padding:0px; border-width:0px; table-layout:fixed;' border='0' cellspacing='0' cellpadding='0'>
<tr>
<td align='center' style='overflow:hidden; white-space:nowrap;' oncontextmenu="javascript:clickTitreTableauTablo('MailsEnvoyesDossiers', 'div_englobant_ListeEmails', 'LISTE', 'ListeEmails');return false;" onClick="javascript:TrierListe('Onglet5TableNumero1', 'ListeEmails', '116', '116', 'ListeDestinataires', 'ASC');">
Liste destinataires
</td>
<td width='3' align='right' class='Resizor' onmousedown="javascript:setPosition(event, 'TaBlEaU_ListeEmails');" onmouseover="javascript:setResizeColumns('CoLoNnE_Tablo_ListeEmails_ListeDestinataires', '12');">
</td>
</tr>
</table>
</td>
<td align='center' id='CoLoNnE_Tablo_ListeEmails_Objet'  width='227.5px' class='titre' align='center' style='margin: 0px; padding :0px;'>
<table style='color: inherit; width:100%; margin:0px; padding:0px; border-width:0px; table-layout:fixed;' border='0' cellspacing='0' cellpadding='0'>
<tr>
<td align='center' style='overflow:hidden; white-space:nowrap;' oncontextmenu="javascript:clickTitreTableauTablo('MailsEnvoyesDossiers', 'div_englobant_ListeEmails', 'LISTE', 'ListeEmails');return false;" onClick="javascript:TrierListe('Onglet5TableNumero1', 'ListeEmails', '116', '116', 'Objet', 'ASC');">
Objet
</td>
<td width='3' align='right' class='Resizor' onmousedown="javascript:setPosition(event, 'TaBlEaU_ListeEmails');" onmouseover="javascript:setResizeColumns('CoLoNnE_Tablo_ListeEmails_Objet', '12');">
</td>
</tr>
</table>
</td>
<td align='center' id='CoLoNnE_Tablo_ListeEmails_Etat'  width='78px' class='titre' align='center' style='margin: 0px; padding :0px;'>
<table style='color: inherit; width:100%; margin:0px; padding:0px; border-width:0px; table-layout:fixed;' border='0' cellspacing='0' cellpadding='0'>
<tr>
<td align='center' style='overflow:hidden; white-space:nowrap;' oncontextmenu="javascript:clickTitreTableauTablo('MailsEnvoyesDossiers', 'div_englobant_ListeEmails', 'LISTE', 'ListeEmails');return false;" onClick="javascript:TrierListe('Onglet5TableNumero1', 'ListeEmails', '116', '116', 'Etat', 'ASC');">
Etat
</td>
<td width='3' align='right' class='Resizor' onmousedown="javascript:setPosition(event, 'TaBlEaU_ListeEmails');" onmouseover="javascript:setResizeColumns('CoLoNnE_Tablo_ListeEmails_Etat', '12');">
</td>
</tr>
</table>
</td>
<td align='center' id='CoLoNnE_Tablo_ListeEmails_DateEnvoi'  width='78px' class='titre' align='center' style='margin: 0px; padding :0px;'>
<table style='color: inherit; width:100%; margin:0px; padding:0px; border-width:0px; table-layout:fixed;' border='0' cellspacing='0' cellpadding='0'>
<tr>
<td align='center' style='overflow:hidden; white-space:nowrap;' oncontextmenu="javascript:clickTitreTableauTablo('MailsEnvoyesDossiers', 'div_englobant_ListeEmails', 'LISTE', 'ListeEmails');return false;" onClick="javascript:TrierListe('Onglet5TableNumero1', 'ListeEmails', '116', '116', 'DateEnvoi', 'ASC');">
Date envoi
</td>
<td width='3' align='right' class='Resizor' onmousedown="javascript:setPosition(event, 'TaBlEaU_ListeEmails');" onmouseover="javascript:setResizeColumns('CoLoNnE_Tablo_ListeEmails_DateEnvoi', '12');">
</td>
</tr>
</table>
</td>
</tr>
</thead></table>
</div>
</div>
</td>
</table></td></tr>
</table>
</div>
</div>
</div>
<div id='div_fenetre_pied' class='fenetreElementPied'  style="">
<table width='100%' cellspacing='0' cellpadding='0' height='100%'>
<tr>
<td id='cellule_bouton_bas_sauvegarder' class='cellule_bouton_bas_Off' onClick="javascript:SauvegarderCourant();" onMouseOver="changeBoutonBas('sauvegarder', 'On');" onMouseOut="changeBoutonBas('sauvegarder', 'Off');">
<img id='img_bout_bas_sauvegarder' src='images/2016/Boutons/bouton_enregistrer_Off.png' border='0'><br><nobr>Enregistrer</nobr>
</td><td id='cellule_bouton_bas_imprimer' class='cellule_bouton_bas_Off'  onMouseOver="changeBoutonBas('imprimer', 'On');changeBoutonBas('imprimer_plus', 'On');" onMouseOut="changeBoutonBas('imprimer', 'Off');changeBoutonBas('imprimer_plus', 'Off');">
<table width='100%' cellspacing='0' cellpadding='0' height='100%'>
<td onClick="javascript:ImpressionDoc('Courant', '', '-1');" style='border-right:1px solid #333333;'>
<img id='img_bout_bas_imprimer' src='images/2016/Boutons/bouton_imprimer_Off.png' border='0'><br><nobr>Aperçu</nobr>
</td>
<td onClick="javascript:ImpressionDoc('Courant', '');">
<img id='img_bout_bas_imprimer_plus' src='images/2016/Boutons/bouton_imprimer_plus_Off.png' border='0'></td>
</table>
</td><td id='cellule_bouton_bas_valider' class='cellule_bouton_bas_Off' onClick="javascript:valideFormulaireFenetreOnglet('fenetre_element');" onMouseOver="changeBoutonBas('valider', 'On');" onMouseOut="changeBoutonBas('valider', 'Off');">
<img id='img_bout_bas_valider' src='images/2016/Boutons/bouton_valider_Off.png' border='0'><br><nobr>Valider</nobr>
</td><td id='cellule_bouton_bas_annuler' class='cellule_bouton_bas_Off' onClick="javascript:cacheFenetreElement('fenetreElement', '116', false);" onMouseOver="changeBoutonBas('annuler', 'On');" onMouseOut="changeBoutonBas('annuler', 'Off');">
<img id='img_bout_bas_annuler' src='images/2016/Boutons/bouton_annuler_Off.png' border='0'><br><nobr>Annuler</nobr>
</td><input type='hidden' name='NoMfOrMuLaIrE' value='FenetreElement'>
<input type='hidden' name='MoDeAfFiChAgE' value=''>
<input type='hidden' name='LargeurFenetreNormale' value='1333.3333333333'>
<input type='hidden' name='HauteurFenetreNormale' value='866.66666666667'>
<input type='hidden' name='IdMysqlElementCourant' value='116'>
</td>
</tr>
</table>
</div>
</td>
<td class='fenetreDroite'>
</td>
</tr>
<tr>
<td class='fenetreBasGauche'>
</td>
<td class='fenetreBas' colspan='2'>
</td>
<td class='fenetreBasDroite'>
</td>
</tr>
</table>
</form>`

// Create Devis
fetch("https://jaime.jlogiciels.fr/main_tableur.php?ajax=oui", {
  "headers": {
    "accept": "*/*",
    "accept-language": "fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7",
    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    "sec-ch-ua": "\"Google Chrome\";v=\"95\", \"Chromium\";v=\"95\", \";Not A Brand\";v=\"99\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-requested-with": "XMLHttpRequest"
  },
  "referrer": "https://jaime.jlogiciels.fr/index.php",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "Id=93&DateCreation=2021-10-28&Utilisateur=unipromotion.berthier&DateMaj=28%2F10%2F21&UserMaj=unipromotion.berthier&NoDocument=En+cours...&Date=28%2F10%2F21&Categorie1=RDF&Boutons=&NoDevis=&Chantier=RDF+test+upload&Commentaire=&Commercial=CANCELA&Sigle=SCA&Agence=UNI+PROMOTION&SigAgence=SIEGE&Technicien=CONDAMINES+Caroline&Chiffreur=&NomPrenom=Client+Test+SCA&Prenom=&Prefixe=M.&TContacts=&TMateriels=&Adresse1=35%2C+rue+des+Cheminots&Tel=01698413646840&Adresse2=&Fax=&CP=75018&Ville=PARIS&NoInsee=&GPSLat=&GPSLon=&Dpt=&TeP=&Pays=&Email=&TVAIntra=&Provenance=apport+commerce&TypeClient=&Famille=&NoClient=18&AdrLivr=M.+Client+Test+SCA+35%2C+rue+des+Cheminots++75018+PARIS+&Destinataire=&PrefDestinataire=&RefDestinataire=&UtilCreation=Berthier+Fabien&TypDevis=&NomPreLivr=Client+Test+SCA&PrefLivr=M.&Adr1Livr=35%2C+rue+des+Cheminots&TLivr=01698413646840&Adr2Livr=&DeuxTLivr=&CLivr=75018&VilLivr=PARIS&PayLivr=&PortLivr=&Interlocuteur=&PrefInt=&ServInt=&MailLivr=&TInt=&PortInt=&MailInt=&NomChantier=&IdChantier=&LivrDeuxMail=&IntLivrContact=&IntLivrPrefixe=&IntTLivr=&IntPortLivr=&IntFax=&IntLivrMail=&IntLivrDeuxMail=&SCLibChantier=&SCNoChantier=&RibDom=&RibBq=&RibGui=&RibCpt=&RibCle=&RibRCS=&SituationCree=&TInterlocuteurs=EnTeTe%3AClE_InTeRnE%C2%A4Type%C2%A4NomPrenom%C2%A4Prefixe%C2%A4Adresse1%C2%A4Adresse2%C2%A4CP%C2%A4Ville%C2%A4Tel%C2%A4DeuxTelephone%C2%A4TeP%C2%A4Fax%C2%A4Email%C2%A4DeuxMail%C2%A4Reference%C2%A4AccordCadre%7C%C2%A4Client%C2%A4Client+Test+SCA%C2%A4M.%C2%A435%2C+rue+des+Cheminots%C2%A4%C2%A475018%C2%A4PARIS%C2%A401698413646840%C2%A4%C2%A4%C2%A4%C2%A4%C2%A4%C2%A4%C2%A4%C2%A4%7C%C2%A4Risque%C2%A4Client+Test+SCA%C2%A4M.%C2%A435%2C+rue+des+Cheminots%C2%A4%C2%A475018%C2%A4PARIS%C2%A401698413646840%C2%A4%C2%A4%C2%A4%C2%A4%C2%A4%C2%A4%C2%A4&IdDossier=123&DossierRef=UP210024%2FBDX%2FDDE&DossierNomRisque=Client+Test+SCA+-+35%2C+rue+des+Cheminots+75018+PARIS&TypeSinistre=D%C3%A9g%C3%A2t+des+eaux&ChoixBPU=&NoAgrement=&LivraisonReliquat=&LivraisonQteReliquat=0&Articles__ClE_InTeRnE__LigneNUMEROLIGNE=&Articles__Photo__LigneNUMEROLIGNE=&Articles__Reference__LigneNUMEROLIGNE=&Articles__RefFourn__LigneNUMEROLIGNE=&Articles__Designation__LigneNUMEROLIGNE=&Articles__Dimensions__LigneNUMEROLIGNE=&Articles__Famille__LigneNUMEROLIGNE=&Articles__NbLigOuv__LigneNUMEROLIGNE=&Articles__Ouvrage__LigneNUMEROLIGNE=&Articles__Fournisseur__LigneNUMEROLIGNE=&Articles__CpteFournisseur__LigneNUMEROLIGNE=&Articles__PF__LigneNUMEROLIGNE=&Articles__Coef__LigneNUMEROLIGNE=&Articles__PU__LigneNUMEROLIGNE=&Articles__PTTC__LigneNUMEROLIGNE=&Articles__Temps__LigneNUMEROLIGNE=&Articles__PdsUnitaire__LigneNUMEROLIGNE=&Articles__Colisage__LigneNUMEROLIGNE=&Articles__FillerQte__LigneNUMEROLIGNE=&Articles__Qte__LigneNUMEROLIGNE=&Articles__Unite__LigneNUMEROLIGNE=&Articles__Remise__LigneNUMEROLIGNE=&Articles__MontantPA__LigneNUMEROLIGNE=&Articles__MontantHT__LigneNUMEROLIGNE=&Articles__MontantTTC__LigneNUMEROLIGNE=&Articles__TpsTotal__LigneNUMEROLIGNE=&Articles__PdsTotal__LigneNUMEROLIGNE=&Articles__NbColis__LigneNUMEROLIGNE=&Articles__MB__LigneNUMEROLIGNE=&Articles__TxTVA__LigneNUMEROLIGNE=&Articles__TxTVAImp__LigneNUMEROLIGNE=&Articles__MontantTVA__LigneNUMEROLIGNE=&Articles__TVA021__LigneNUMEROLIGNE=&Articles__HTTVA021__LigneNUMEROLIGNE=&Articles__TVA20__LigneNUMEROLIGNE=&Articles__HTTVA20__LigneNUMEROLIGNE=&Articles__TVA196__LigneNUMEROLIGNE=&Articles__HTTVA196__LigneNUMEROLIGNE=&Articles__TVA10__LigneNUMEROLIGNE=&Articles__HTTVA10__LigneNUMEROLIGNE=&Articles__TVA70__LigneNUMEROLIGNE=&Articles__HTTVA70__LigneNUMEROLIGNE=&Articles__TVA55__LigneNUMEROLIGNE=&Articles__HTTVA55__LigneNUMEROLIGNE=&Articles__DateLivr__LigneNUMEROLIGNE=&Articles__CommentLivr__LigneNUMEROLIGNE=&Articles__Un__LigneNUMEROLIGNE=&Articles__Livre__LigneNUMEROLIGNE=&Articles__ClE_InTeRnE__LigneSEPARATEUR=SePaRaTeUr%3A&Articles__Photo__LigneSEPARATEUR=&Articles__Reference__LigneSEPARATEUR=&Articles__RefFourn__LigneSEPARATEUR=&Articles__Designation__LigneSEPARATEUR=&Articles__Dimensions__LigneSEPARATEUR=&Articles__Famille__LigneSEPARATEUR=&Articles__NbLigOuv__LigneSEPARATEUR=&Articles__Ouvrage__LigneSEPARATEUR=&Articles__Fournisseur__LigneSEPARATEUR=&Articles__CpteFournisseur__LigneSEPARATEUR=&Articles__PF__LigneSEPARATEUR=&Articles__Coef__LigneSEPARATEUR=&Articles__PU__LigneSEPARATEUR=&Articles__PTTC__LigneSEPARATEUR=&Articles__Temps__LigneSEPARATEUR=&Articles__PdsUnitaire__LigneSEPARATEUR=&Articles__Colisage__LigneSEPARATEUR=&Articles__FillerQte__LigneSEPARATEUR=&Articles__Qte__LigneSEPARATEUR=&Articles__Unite__LigneSEPARATEUR=&Articles__Remise__LigneSEPARATEUR=&Articles__MontantPA__LigneSEPARATEUR=&Articles__MontantHT__LigneSEPARATEUR=&Articles__MontantTTC__LigneSEPARATEUR=&Articles__TpsTotal__LigneSEPARATEUR=&Articles__PdsTotal__LigneSEPARATEUR=&Articles__NbColis__LigneSEPARATEUR=&Articles__MB__LigneSEPARATEUR=&Articles__TxTVA__LigneSEPARATEUR=&Articles__TxTVAImp__LigneSEPARATEUR=&Articles__MontantTVA__LigneSEPARATEUR=&Articles__TVA021__LigneSEPARATEUR=&Articles__HTTVA021__LigneSEPARATEUR=&Articles__TVA20__LigneSEPARATEUR=&Articles__HTTVA20__LigneSEPARATEUR=&Articles__TVA196__LigneSEPARATEUR=&Articles__HTTVA196__LigneSEPARATEUR=&Articles__TVA10__LigneSEPARATEUR=&Articles__HTTVA10__LigneSEPARATEUR=&Articles__TVA70__LigneSEPARATEUR=&Articles__HTTVA70__LigneSEPARATEUR=&Articles__TVA55__LigneSEPARATEUR=&Articles__HTTVA55__LigneSEPARATEUR=&Articles__DateLivr__LigneSEPARATEUR=&Articles__CommentLivr__LigneSEPARATEUR=&Articles__Un__LigneSEPARATEUR=&Articles__Livre__LigneSEPARATEUR=&ArtAuto=_Articles&Qte=0&MontantPA=0.00&TpsTotal=0&PdsTotal=0&NbColis=0&Charges=0.00&TabCharges=&MB=0.00&PourcMarge=100.00&ModeRegl=&ValiditeDevis=30&Signature=556&MontantHT=0.00&ConvRemise=0&ConvMontantRemise=0.00&TypeRemPro=Remise&Remise=0&CoeffRemise=1&MontantRemiseBis=0.00&DeuxTypeRemPro=Remise&DeuxRemise=0&DeuxCoeffRemise=1.000000&DeuxMontantRemiseBis=0.00&MontantTTC=0.00&MontantTVA=0.00&TVA20=0.00&HTTVA20=0.00&TVA196=0.00&HTTVA196=0.00&TVA10=0.00&HTTVA10=0.00&TVA70=0.00&HTTVA70=0.00&TVA55=0.00&HTTVA55=0.00&TVA021=0.00&HTTVA021=0.00&TVAautre=0.00&HTTVAautre=0&TVAparTaux=&HTTVAparTaux=&CorpsHT=0.00&MontantRemise=0.00&DeuxMontantRemise=0.00&CorpsTTC=0.00&PortHT=0.00&PortTTC=0&PortTVA=0.00&TxPortTVA=20&TotalHT=0.00&TotalTTC=0.00&TotalTVA=0.00&Acompte=0.00&RG=0.00&TauxRG=0&TexteLibTotaux=Total+HT+%3A%3CBR%3ETotal+TTC+%3A%3CBR%3E&TexteTotaux=0.00+%5B%E2%82%AC%5D%3CBR%3E0.00+%5B%E2%82%AC%5D%3CBR%3E&NetAPayer=0.00&LetNetAPayer=zero+Euro&TotalRemiseCorps=0&RemTVA021=0.00&RemTVA20=0.00&RemTVA196=0.00&RemTVA10=0.00&RemTVA70=0.00&RemTVA55=0.00&RemTVAautre=0.00&RemPortTVA=0.00&PhraseRemise=&NbLigArticleQte=0&NbLigneLivr=0&Edition=A+%C3%A9diter&Etat=En_attente&FacturationEtat=&FacturationForcee=&VerrouCorps=&CommentEtat=&CommentAttente=&DatePerdu=&CommentPerdu=&DateVT=&CommentVT=&DateCommande=&CommentCommande=&Livraison=&DateEnCours=&CommentEnCours=&DateTermine=&CommentTermine=&DatLivraison=0000-00-00&DateAFacturer=&CommentAFacturer=&DateFacture=&CommentFacture=&NoFactures=&DateAnnule=&CommentAnnule=&Paiements__ClE_InTeRnE__LigneNUMEROLIGNE=&Paiements__Date__LigneNUMEROLIGNE=&Paiements__ModeReglement__LigneNUMEROLIGNE=&Paiements__Informations__LigneNUMEROLIGNE=&Paiements__BankEmettrice__LigneNUMEROLIGNE=&Paiements__NoCheque__LigneNUMEROLIGNE=&Paiements__NoReglement__LigneNUMEROLIGNE=&Paiements__Montant__LigneNUMEROLIGNE=&Paiements__MontTTC__LigneNUMEROLIGNE=&Paiements__DateRappr__LigneNUMEROLIGNE=&Paiements__Banque__LigneNUMEROLIGNE=&Paiements__NoRemise__LigneNUMEROLIGNE=&Paiements__NbLignes__LigneNUMEROLIGNE=&Paiements__str_paiements__LigneNUMEROLIGNE=&Paiements__ClE_InTeRnE__LigneSEPARATEUR=SePaRaTeUr%3A&Paiements__Date__LigneSEPARATEUR=&Paiements__ModeReglement__LigneSEPARATEUR=&Paiements__Informations__LigneSEPARATEUR=&Paiements__BankEmettrice__LigneSEPARATEUR=&Paiements__NoCheque__LigneSEPARATEUR=&Paiements__NoReglement__LigneSEPARATEUR=&Paiements__Montant__LigneSEPARATEUR=&Paiements__MontTTC__LigneSEPARATEUR=&Paiements__DateRappr__LigneSEPARATEUR=&Paiements__Banque__LigneSEPARATEUR=&Paiements__NoRemise__LigneSEPARATEUR=&Paiements__NbLignes__LigneSEPARATEUR=&Paiements__str_paiements__LigneSEPARATEUR=&NbLignes=0&ListePaiements=&ExporteEnCompta=&CumulArticles__ClE_InTeRnE__LigneNUMEROLIGNE=&CumulArticles__Photo__LigneNUMEROLIGNE=&CumulArticles__Reference__LigneNUMEROLIGNE=&CumulArticles__RefFourn__LigneNUMEROLIGNE=&CumulArticles__Designation__LigneNUMEROLIGNE=&CumulArticles__Dimensions__LigneNUMEROLIGNE=&CumulArticles__Famille__LigneNUMEROLIGNE=&CumulArticles__NbLigOuv__LigneNUMEROLIGNE=&CumulArticles__Ouvrage__LigneNUMEROLIGNE=&CumulArticles__Fournisseur__LigneNUMEROLIGNE=&CumulArticles__CpteFournisseur__LigneNUMEROLIGNE=&CumulArticles__PF__LigneNUMEROLIGNE=&CumulArticles__Coef__LigneNUMEROLIGNE=&CumulArticles__PU__LigneNUMEROLIGNE=&CumulArticles__PTTC__LigneNUMEROLIGNE=&CumulArticles__Temps__LigneNUMEROLIGNE=&CumulArticles__PdsUnitaire__LigneNUMEROLIGNE=&CumulArticles__Colisage__LigneNUMEROLIGNE=&CumulArticles__FillerQte__LigneNUMEROLIGNE=&CumulArticles__Qte__LigneNUMEROLIGNE=&CumulArticles__Unite__LigneNUMEROLIGNE=&CumulArticles__Remise__LigneNUMEROLIGNE=&CumulArticles__MontantPA__LigneNUMEROLIGNE=&CumulArticles__MontantHT__LigneNUMEROLIGNE=&CumulArticles__MontantTTC__LigneNUMEROLIGNE=&CumulArticles__TpsTotal__LigneNUMEROLIGNE=&CumulArticles__PdsTotal__LigneNUMEROLIGNE=&CumulArticles__NbColis__LigneNUMEROLIGNE=&CumulArticles__MB__LigneNUMEROLIGNE=&CumulArticles__TxTVA__LigneNUMEROLIGNE=&CumulArticles__TxTVAImp__LigneNUMEROLIGNE=&CumulArticles__MontantTVA__LigneNUMEROLIGNE=&CumulArticles__TVA021__LigneNUMEROLIGNE=&CumulArticles__HTTVA021__LigneNUMEROLIGNE=&CumulArticles__TVA20__LigneNUMEROLIGNE=&CumulArticles__HTTVA20__LigneNUMEROLIGNE=&CumulArticles__TVA196__LigneNUMEROLIGNE=&CumulArticles__HTTVA196__LigneNUMEROLIGNE=&CumulArticles__TVA10__LigneNUMEROLIGNE=&CumulArticles__HTTVA10__LigneNUMEROLIGNE=&CumulArticles__TVA70__LigneNUMEROLIGNE=&CumulArticles__HTTVA70__LigneNUMEROLIGNE=&CumulArticles__TVA55__LigneNUMEROLIGNE=&CumulArticles__HTTVA55__LigneNUMEROLIGNE=&CumulArticles__DateLivr__LigneNUMEROLIGNE=&CumulArticles__CommentLivr__LigneNUMEROLIGNE=&CumulArticles__Un__LigneNUMEROLIGNE=&CumulArticles__Livre__LigneNUMEROLIGNE=&CumulArticles__ClE_InTeRnE__LigneSEPARATEUR=SePaRaTeUr%3A&CumulArticles__Photo__LigneSEPARATEUR=&CumulArticles__Reference__LigneSEPARATEUR=&CumulArticles__RefFourn__LigneSEPARATEUR=&CumulArticles__Designation__LigneSEPARATEUR=&CumulArticles__Dimensions__LigneSEPARATEUR=&CumulArticles__Famille__LigneSEPARATEUR=&CumulArticles__NbLigOuv__LigneSEPARATEUR=&CumulArticles__Ouvrage__LigneSEPARATEUR=&CumulArticles__Fournisseur__LigneSEPARATEUR=&CumulArticles__CpteFournisseur__LigneSEPARATEUR=&CumulArticles__PF__LigneSEPARATEUR=&CumulArticles__Coef__LigneSEPARATEUR=&CumulArticles__PU__LigneSEPARATEUR=&CumulArticles__PTTC__LigneSEPARATEUR=&CumulArticles__Temps__LigneSEPARATEUR=&CumulArticles__PdsUnitaire__LigneSEPARATEUR=&CumulArticles__Colisage__LigneSEPARATEUR=&CumulArticles__FillerQte__LigneSEPARATEUR=&CumulArticles__Qte__LigneSEPARATEUR=&CumulArticles__Unite__LigneSEPARATEUR=&CumulArticles__Remise__LigneSEPARATEUR=&CumulArticles__MontantPA__LigneSEPARATEUR=&CumulArticles__MontantHT__LigneSEPARATEUR=&CumulArticles__MontantTTC__LigneSEPARATEUR=&CumulArticles__TpsTotal__LigneSEPARATEUR=&CumulArticles__PdsTotal__LigneSEPARATEUR=&CumulArticles__NbColis__LigneSEPARATEUR=&CumulArticles__MB__LigneSEPARATEUR=&CumulArticles__TxTVA__LigneSEPARATEUR=&CumulArticles__TxTVAImp__LigneSEPARATEUR=&CumulArticles__MontantTVA__LigneSEPARATEUR=&CumulArticles__TVA021__LigneSEPARATEUR=&CumulArticles__HTTVA021__LigneSEPARATEUR=&CumulArticles__TVA20__LigneSEPARATEUR=&CumulArticles__HTTVA20__LigneSEPARATEUR=&CumulArticles__TVA196__LigneSEPARATEUR=&CumulArticles__HTTVA196__LigneSEPARATEUR=&CumulArticles__TVA10__LigneSEPARATEUR=&CumulArticles__HTTVA10__LigneSEPARATEUR=&CumulArticles__TVA70__LigneSEPARATEUR=&CumulArticles__HTTVA70__LigneSEPARATEUR=&CumulArticles__TVA55__LigneSEPARATEUR=&CumulArticles__HTTVA55__LigneSEPARATEUR=&CumulArticles__DateLivr__LigneSEPARATEUR=&CumulArticles__CommentLivr__LigneSEPARATEUR=&CumulArticles__Un__LigneSEPARATEUR=&CumulArticles__Livre__LigneSEPARATEUR=&NbDocs=0&TableauSuivi__ClE_InTeRnE__LigneNUMEROLIGNE=&TableauSuivi__DateCreation__LigneNUMEROLIGNE=&TableauSuivi__HeureCreation__LigneNUMEROLIGNE=&TableauSuivi__Utilisateur__LigneNUMEROLIGNE=&TableauSuivi__Date__LigneNUMEROLIGNE=&TableauSuivi__Nature__LigneNUMEROLIGNE=&TableauSuivi__DelaiVendu__LigneNUMEROLIGNE=&TableauSuivi__DelaiReel__LigneNUMEROLIGNE=&TableauSuivi__Commentaire__LigneNUMEROLIGNE=&TableauSuivi__ClE_InTeRnE__LigneSEPARATEUR=SePaRaTeUr%3A&TableauSuivi__DateCreation__LigneSEPARATEUR=&TableauSuivi__HeureCreation__LigneSEPARATEUR=&TableauSuivi__Utilisateur__LigneSEPARATEUR=&TableauSuivi__Date__LigneSEPARATEUR=&TableauSuivi__Nature__LigneSEPARATEUR=&TableauSuivi__DelaiVendu__LigneSEPARATEUR=&TableauSuivi__DelaiReel__LigneSEPARATEUR=&TableauSuivi__Commentaire__LigneSEPARATEUR=&TotalFacture=0.00&CalculResteAFact=Automatique&ResteAFacturer=0.00&PhotosSupp__ClE_InTeRnE__LigneNUMEROLIGNE=&PhotosSupp__Photo__LigneNUMEROLIGNE=&PhotosSupp__Titre__LigneNUMEROLIGNE=&PhotosSupp__Libelle__LigneNUMEROLIGNE=&PhotosSupp__ClE_InTeRnE__LigneSEPARATEUR=SePaRaTeUr%3A&PhotosSupp__Photo__LigneSEPARATEUR=&PhotosSupp__Titre__LigneSEPARATEUR=&PhotosSupp__Libelle__LigneSEPARATEUR=&DatDiagnostic=&ComIsEnfants=&ComIsAnimaux=&ComIsCanapeLit=&DatHistoPunaises=&ComIsTraitementAnterieur=&LocLogement=&SupportsInfestes=&LocEncombre=&LocDegradationRevetement=&PerimetrePropagation=&NiveauInfestation=&ComInfestation=&Preconisations=&NoMfOrMuLaIrE=FenetreElement&MoDeAfFiChAgE=&LargeurFenetreNormale=1066.6666666667&HauteurFenetreNormale=760&IdMysqlElementCourant=93",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});