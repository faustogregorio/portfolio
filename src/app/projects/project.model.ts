export interface Project{
  _id: string;
  name: string;
  description: string;
  tecnologies: Tecnologie[];
  backgroundColor: string;
  imageUrl: string;


}
export interface Tecnologie {
  _id: string;
  name: string;
 logoUrl: string;
}
