export interface EServiceCategories {
    ID: number;
    Name: string
}

export interface EServiceFlow {
    Category: string;
    CategoryID: number;
    Enabled: boolean;
    FlowFamilyID: number;
    ID: number;
    Icon: string;
    LongDescription: string;
    Name: string;
    RequiresAuthentication: boolean;
    RequiresSigning: boolean;
    ShortDescription: string;
    URL: string;
}
