import { Vue, Prop, Component } from 'vue-property-decorator'
import axios from 'axios'
import TenantSelectDialog from '@/components/tenant-select-dialog/tenant-select-dialog.vue';
import TenantSelectDialogComponent from "@/components/tenant-select-dialog/tenant-select-dialog.component";
@Component({
    name: 'platform-detail',
    components: { TenantSelectDialog }
})
export default class PlatformDetailComponent extends Vue {
    winTenantSelect: TenantSelectDialogComponent;
    @Prop()
    detailInfo: any;
    @Prop()
    statusProp: any;
    companyInfo: any = {};
    resSetList: any[] = [];
    detailAll: any[] = [];
    showFalse: boolean = false;
    tenantModalShow: boolean = false;
    tenantModal: String = "";
    tenantList: any[] = [];
    servicePackageModalShow: boolean = false;
    servicePackageModal: String = "";
    servicePackageList: any[] = [];
    accountDetails: any[] = [];
    accountSearch: String = "";
    multiplFalse: boolean = false;
    baseUrl = axios.defaults.baseURL;
    headers = {
        'X-Access-Token': axios.defaults.headers.common['X-Access-Token'],
        'X-Operation-Token': axios.defaults.headers.common['X-Operation-Token'],
    };

    mounted() {

        console.log("111refs2");
        console.log(this.$refs);
        console.log(this.$refs["tenantSelectDialog"]);
    }
    getDetail() {
    }
    formatDate(item) {
        return (item.substr(0, 4) + '-' + item.substr(4, 2) + '-' + item.substr(6, 2));
    }
    copy() {

    }
    edit() {

    }
    del() {

    }
    showAll(index) {
        this.resSetList[index].hover = true;
        console.log('in');
    }
    hideAll(index) {
        this.resSetList[index].hover = false;
        console.log('out');
    }
    addGroup() {
        if (!this.winTenantSelect) {
            let dialog: any = this.$refs["tenantSelectDialog"];
            this.winTenantSelect = dialog;
        }
         console.log(this.$refs["tenantSelectDialog"]);
         this.winTenantSelect.show();
    }
    addServicePackage() {
        this.servicePackageModalShow = true;
    }
    delTenant(id) {

    }
    delPackage(id) {

    }
    searchAccount() {

    }
    uploadSuccess() {

    }
    uploadError() {

    }
    closeTenantModal() {

    }
    querySearchAsync() {

    }
    handleSelect() {

    }
    closeServicePackageModal() {

    }
    querySearchAsync2() {

    }
    handleSelect2() {

    }
}


