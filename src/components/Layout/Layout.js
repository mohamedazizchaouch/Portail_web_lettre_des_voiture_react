import React from "react";
import {
  Route,
  Switch,
  Redirect,
  withRouter,
} from "react-router-dom";
import classnames from "classnames";

// styles
import useStyles from "./styles";

// components
import Header from "../Header";
import Sidebar from "../Sidebar";

// pages
import Dashboard from "../../pages/dashboard";
import Typography from "../../pages/typography";
import Notifications from "../../pages/notifications";
import Maps from "../../pages/maps";
import Tables from "../../pages/tables";
import Icons from "../../pages/icons";
import Charts from "../../pages/charts";
import DashboardClient from "../../pages/dashboard_Client/DashbordClient"
import dashboardAdmin from "../../pages/dashbordAdmin/DashbordAdmin"

// context
import { useLayoutState } from "../../context/LayoutContext";
import clientdetail from "../../pages/dashbordAdmin/clientdetail";
import FormClient from "../../pages/dashbordAdmin/FormClient";
import HistoriqueCommande from "../../pages/dashbordAdmin/HistoriqueCommande";
import commande_etat_refuser from "../../pages/dashbordAdmin/commande_etat_refuser";
import commande_etat_accepter from "../../pages/dashbordAdmin/commande_etat_accepter";
import commande_etat_encours from "../../pages/dashbordAdmin/commande_etat_encous";
import commande_impr from "../../pages/dashbordAdmin/commande_impr";
import ClientForm from "../../pages/dashbordAdmin/ajout_client/ClientForm";
import AjoutCommande from "../../pages/dashbordAdmin/AjouterCommande/AjoutCommande";
import Supprimer_element from "../../pages/dashbordAdmin/AjouterCommande/Supprimer_element";
import DetailCmd from "../../pages/dashbordAdmin/DetailCmd";
import Stat from "../../pages/dashbordAdmin/Statistique/Stat";
import Commane_encours from "../../pages/DashbordImprimeur/Commane_encours";
import Detail_cmd_imp from "../../pages/DashbordImprimeur/Detail_cmd_imp";
import ListeClient from "../../pages/DashbordImprimeur/ListeClient";
import Commane_facture from "../../pages/DashbordImprimeur/Commande_facture";
import Statistique from "../../pages/DashbordImprimeur/Statistique";
import Demo from "../../pages/DashbordImprimeur/Production/Calendar";
import Depot_BAT from "../../pages/DashbordImprimeur/Depot_BAT";
import Commande_encours from "../../pages/dashboard_Client/Commande/Commande_encours";
import Historique from "../../pages/dashboard_Client/Historique";
import Suiv_cmd from "../../pages/dashboard_Client/Suiv_cmd";
import Livraison from "../../pages/DashbordImprimeur/Livraison/Livraison";
import Chattbot from "../../pages/dashboard_Client/ChatBot/Chattbot";
import Liste_imps from "../../pages/dashbordAdmin/Liste_imps";
import change_password from "../../pages/dashbordAdmin/change_password";

function Layout(props) {
  var classes = useStyles();

  // global
  var layoutState = useLayoutState();

  return (
    <div className={classes.root}>
        <>
          <Header history={props.history} />
          <Sidebar />
          <div
            className={classnames(classes.content, {
              [classes.contentShift]: layoutState.isSidebarOpened,
            })}
          >
            <div className={classes.fakeToolbar} />
            <Switch>
            <Route path="/app/Letat_refuser" component={commande_etat_refuser} />
              <Route path="/app/dashboard" component={Dashboard} />
              <Route path="/app/statistique" component={Stat} />
              <Route path="/app/aziz" component={ClientForm} />
              <Route path="/app/detailCmd/:id" component={DetailCmd} />
              <Route path="/app/ajoutcommande/:id" component={AjoutCommande} />
              <Route path="/app/supprimerel/:id" component={Supprimer_element} />
              <Route path="/app/HistoriqueComm" component={HistoriqueCommande} />
              <Route path="/app/Letat_refuser" component={commande_etat_refuser} />
              <Route path="/app/Letat_accepter" component={commande_etat_accepter} />
              <Route path="/app/Letat_encours" component={commande_etat_encours} />
              <Route path="/app/Letat_impr" component={commande_impr} />
              <Route path="/app/dashboardClient" component={DashboardClient} />
              <Route path="/app/dashboardAdmin" component={dashboardAdmin} />
              <Route path="/app/liste_imp" component={Liste_imps} />
              <Route path="/app/changemdp" component={change_password} />




              <Route path="/app/clt_cmd_encours" component={Commande_encours} />
              <Route path="/app/clt_Historique" component={Historique} />
              <Route path="/app/clt_suiv" component={Suiv_cmd} />
              <Route path="/app/test" component={Chattbot} />

              <Route path="/app/imp_liv" component={Livraison} />
              <Route path="/app/depot/:id" component={Depot_BAT} />
              <Route path="/app/production_imp" component={Demo} />
              <Route path="/app/stat_imp" component={Statistique} />
              <Route path="/app/dossier_facturer" component={Commane_facture} />
              <Route path="/app/listclient_imp" component={ListeClient} />
              <Route path="/app/det_cmd_imp/:id" component={Detail_cmd_imp} />
              <Route path="/app/dossier_encours" component={Commane_encours} />
              <Route path="/app/clientdtail/:id" component={clientdetail} />
              <Route path="/app/typography" component={Typography} />
              <Route path="/app/tables" component={Tables} />
              <Route path="/app/addclient" component={FormClient} />
              <Route path="/app/notifications" component={Notifications} />
              <Route
                exact
                path="/app/ui"
                render={() => <Redirect to="/app/ui/icons" />}
              />
              <Route path="/app/ui/maps" component={Maps} />
              <Route path="/app/ui/icons" component={Icons} />
              <Route path="/app/ui/charts" component={Charts} />
            </Switch>
          </div>
        </>
    </div>
  );
}

export default withRouter(Layout);
