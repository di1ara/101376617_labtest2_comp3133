import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpacexService } from '../spacex.service';
import { MissionfilterComponent } from '../missionfilter/missionfilter.component';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-missionlist',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MissionfilterComponent,
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent {
  launches: any[] = [];
  filteredLaunches: any[] = [];
  years: string[] = [];

  constructor(private spacexService: SpacexService) {
    this.spacexService.getLaunches().subscribe(data => {
      this.launches = data;
      this.filteredLaunches = data;
      this.years = [...new Set(data.map(l => l.launch_year))].sort();
    });
  }

  // Replace old year filter with full filter logic
  filterLaunches(filters: { year: string; successfulLaunch: string; successfulLand: string }) {
    const { year, successfulLaunch, successfulLand } = filters;

    this.filteredLaunches = this.launches.filter(launch => {
      const matchYear = !year || launch.launch_year === year;
      const matchLaunch =
        successfulLaunch === '' || String(launch.launch_success) === successfulLaunch;
      const matchLand =
        successfulLand === '' ||
        String(launch.rocket?.first_stage?.cores?.[0]?.land_success) === successfulLand;

      return matchYear && matchLaunch && matchLand;
    });
  }
}
