#include <stdio.h>
int arr[6]={1,2,3,4,5,6};

void rearrange(int i, int array[6], int n)
{
	for(int u=6; u>i;u=u-1)
	{
	 array[u]=array[u-1];
	 }
	array[i]=n;
	for(int i=0; i<=6; i++){
	printf("%d\n", array[i]);
	 }
	return;
}

int main(){
	int num;int index;
	printf("Enter a number: ");
	scanf("%d", &num);
	printf("Enter index: ");
	scanf("%d", &index);
	rearrange(index,arr,num);
  return 0;
}
