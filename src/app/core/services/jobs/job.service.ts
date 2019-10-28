import { Injectable } from '@angular/core';
import { ElectronService } from '../electron/electron.service';
import { GetJobs } from '@zowe/cli';
import { SessionService } from '../session/session.service';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  getJobsApi: typeof GetJobs;

  constructor(private es: ElectronService, private ss: SessionService, private js: JobService) {
    if (this.es.isElectron) {
      this.getJobsApi = window.require('@zowe/cli').GetJobs;
    }
  }

  async getAllJobs() {
    const session = await this.ss.getZosmfSession();
    return await this.getJobsApi.getJobs(session);
  }

}
