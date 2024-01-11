import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {TreeNode} from 'primeng/api';
import {lastValueFrom} from "rxjs";

@Injectable()
export class NodeService {

    constructor(private http: HttpClient) { }

    getFiles() {
        return lastValueFrom(this.http.get<any>('assets/demo/data/files.json')
        )
            .then(res => res.data as TreeNode[]);
    }

    getLazyFiles() {
        return lastValueFrom(this.http.get<any>('assets/demo/data/files-lazy.json')
        )
            .then(res => res.data as TreeNode[]);
    }

    getFilesystem() {
        return this.http.get<any>('assets/demo/data/filesystem.json')
            .toPromise()
            .then(res => res.data as TreeNode[]);
    }

    getLazyFilesystem() {
        return this.http.get<any>('assets/demo/data/filesystem-lazy.json')
            .toPromise()
            .then(res => res.data as TreeNode[]);
    }
}
