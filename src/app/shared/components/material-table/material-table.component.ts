import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SHARED_COMPONENTS } from '../../modules/components';

export interface TableHeader {
  key: string;
  label: string;
  type?: 'text' | 'currency' | 'number' | 'date';
  format?: string;
}

@Component({
  selector: 'app-material-table',
  templateUrl: './material-table.component.html',
  styleUrls: ['./material-table.component.scss'],
  standalone: true,
  imports: [...SHARED_COMPONENTS]
})
export class MaterialTableComponent {
  @Input() headers: TableHeader[] = [];
  @Input() data: any[] = [];
  @Input() actions: boolean = true;
  @Output() onDelete = new EventEmitter<string>();
  @Output() onEdit = new EventEmitter<string>();

  getValue(item: any, header: TableHeader): string {
    const value = item[header.key];
    
    switch(header.type) {
      case 'currency':
        return `₹${value}${header.format || ''}`;
      case 'date':
        return new Date(value).toLocaleDateString();
      default:
        return value;
    }
  }
}