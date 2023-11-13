import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar-componente',
  templateUrl: './sidebar-componente.component.html',
  styleUrls: ['./sidebar-componente.component.scss']
})
export class SidebarComponenteComponent {

  openNav () { 
    const sidebar = document.getElementById("mySidebar");
    if (sidebar) {
      sidebar.style.width = "250px";
    }
  }

  closeNav () {
    const sidebar = document.getElementById("mySidebar");
    if (sidebar) {
      sidebar.style.width = "0";
    }
  }



}

