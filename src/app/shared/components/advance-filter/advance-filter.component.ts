import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { home, heart, star } from 'ionicons/icons';
import { SHARED_COMPONENTS } from '../../modules/components';
@Component({
  selector: 'app-advance-filter',
  standalone: true,
  imports: [SHARED_COMPONENTS],
  templateUrl: './advance-filter.component.html',
  styleUrls: ['./advance-filter.component.scss'],
})
export class AdvanceFilterComponent {

  @Input() filters: { label: string, options: string[] }[] = [];
  @Output() filterChange = new EventEmitter<{ column: string, value: string, selected: boolean }>();

  openDropdown = signal<string | null>(null);
  selectedFilters = signal<Record<string, Set<string>>>({});

  toggleDropdown(column: string) {
    this.openDropdown.update(current => current === column ? null : column);
  }

  toggleValue(column: string, value: string) {
    const current = this.selectedFilters();
    const selectedSet = current[column] || new Set<string>();

    if (selectedSet.has(value)) {
      selectedSet.delete(value);
    } else {
      selectedSet.add(value);
    }

    this.selectedFilters.set({ ...current, [column]: selectedSet });
    this.filterChange.emit({ column, value, selected: selectedSet.has(value) });
  }

  isSelected(column: string, value: string): boolean {
    const current = this.selectedFilters();
    return current[column]?.has(value) ?? false;
  }

}
