#include <stdio.h>

int
main ()
{
  char str[] = "A string.";
  char *p = str;

  printf ("%c %c %c\n", str[0], *p, p[3]);
  p += 2;
  printf ("%c %c %c", *p, p[2], p[5]);
  return 0;
}
