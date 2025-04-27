import { Component } from '@angular/core';
import { SHARED_COMPONENTS } from '../../shared/modules/components';
import { MaterialTableComponent, TableHeader } from '../../shared/components/material-table/material-table.component';
import { Platform } from '@ionic/angular';
import { AdvanceFilterComponent } from "../../shared/components/advance-filter/advance-filter.component";
// import { AdvanceFilterComponent } from 'src/app/shared/components/advance-filter/advance-filter.component';

@Component({
  selector: 'app-material-list',
  templateUrl: './material-list.page.html',
  styleUrls: ['./material-list.page.scss'],
  standalone: true,
  imports: [...SHARED_COMPONENTS, MaterialTableComponent, AdvanceFilterComponent]
})
export class MaterialListPage {

    filters = [
        { label: 'Plate Size', options: ['1', '1/2', '1/3', '1/4', '1/5'] },
        { label: 'Material Type', options: ['Steel', 'Iron', 'Aluminum'] },
        { label: 'Status', options: ['Available', 'Rented', 'Under Repair'] }
      ];

  tableHeaders: TableHeader[] = [
    { key: 'name', label: 'Name' },
    { key: 'category', label: 'Category' },
    { key: 'plateSize', label: 'Plate Size' },
    { key: 'materialType', label: 'Material Type' },
    { key: 'dimensions', label: 'Dimensions' },
    { key: 'rentalRate', label: 'Rental Rate', type: 'currency', format: '/day' },
    { key: 'status', label: 'Status' },
    { key: 'quantity', label: 'Quantity', type: 'number' }
  ];
  filterStatus = 'All';
  materials = [
    {
      id: '1',
      name: 'Steel Plate A',
      category: 'Plates',
      plateSize: '4x2',
      materialType: 'Steel',
      length: 4,
      width: 2,
      thickness: 0.5,
      rentalRate: 150,
      status: 'Available',
      quantity: 25
    },
    {
      id: '2',
      name: 'Support Pillar B',
      category: 'Pillars',
      plateSize: '6x3',
      materialType: 'Steel',
      length: 6,
      width: 3,
      thickness: 0.75,
      rentalRate: 200,
      status: 'Rented',
      quantity: 15
    },
    {
      id: '3',
      name: 'Jack Stand C',
      category: 'Jacks',
      plateSize: 'N/A',
      materialType: 'Steel',
      length: 2,
      width: 2,
      thickness: 4,
      rentalRate: 100,
      status: 'Under Repair',
      quantity: 8
    },
    {
      id: '4',
      name: 'Aluminum Plate D',
      category: 'Plates',
      plateSize: '3x2',
      materialType: 'Aluminum',
      length: 3,
      width: 2,
      thickness: 0.25,
      rentalRate: 120,
      status: 'Available',
      quantity: 30
    },
    {
      id: '5',
      name: 'Heavy Duty Jack E',
      category: 'Jacks',
      plateSize: 'N/A',
      materialType: 'Steel',
      length: 2.5,
      width: 2.5,
      thickness: 5,
      rentalRate: 250,
      status: 'Rented',
      quantity: 12
    }
  ];

  constructor(private platform: Platform) {}

  ngOnInit() {}

  handleFilterChange(event: any) {
    console.log('Filter changed: ', event);
    // Do filtering logic here
  }

  isMobile(): boolean {
    return this.platform.is('mobile') || this.platform.width() < 768;
  }

  filteredMaterials() {
    if (this.filterStatus === 'All') {
      return this.materials;
    }
    return this.materials.filter(m => m.status === this.filterStatus);
  }

  deleteMaterial(id: string) {
    // Implement delete logic
    console.log('Deleting material:', id);
  }

  editMaterial(material: any) {
    // Implement edit logic
    console.log('Editing material:', material);    
  }
}