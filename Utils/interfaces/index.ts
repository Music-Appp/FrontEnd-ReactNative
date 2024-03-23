export interface IInfor {
    username: string;
    status: string;
    message: string;
}

export interface IChatData {
    id: number;
    type: number;
    infor: IInfor;
}

export interface IChat {
    username: string;
    type: string;
    message: string;
}