import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
    title = 'angular11-app';
    products: any;
    selectedProduct: any;
    param_Id: any;
    loader: boolean = false;
    constructor(private route: ActivatedRoute, private http: HttpClient,private router:Router) {

        this.route.params.subscribe((param: any) => {
            console.log(param, 'Params')
            this.param_Id = param.id;
            const navigation =this.router.getCurrentNavigation();
            console.log(navigation,"Navigation....");
            const data= navigation?.extras.state?.data;
            console.log(data,"State Data ")
            // setTimeout(() => {

            //     this.getProduct(this.param_Id)
            // }, 1000);

        })
        this.http.get('https://fakestoreapi.com/products').subscribe((res: any) => {
            console.log(res, "111")
            this.products = res;
            this.getProduct(this.param_Id)
        })

    }
    ngOnInit() {
        // console.log(this.getProduct(this.param_Id).subscribe(res=>{console.log(res,"Filtered Res")}),"PRoduct")
    }
    getProduct(id: any) {
        this.products?.forEach((val:any) => {
            if (val.id == this.param_Id) {
               this.selectedProduct=val;
               console.log(this.selectedProduct,'The Product u have selected...')
            }
        })
    }
    testClose(){
        this.router.navigate(['/products'])
    }
}