from math import log


def bruteforce_time(*args, **kwargs):
    n = kwargs.get('n')
    k = kwargs.get('k')
    s = kwargs.get('s')
    m = kwargs.get('m')
    v = kwargs.get('v')
    if m == 0 or v == 0:
        t_sec = n ** k / s
    else:
        t_sec = n ** k / s + (n ** k / s) * v / m
    t_day = int(t_sec // 86400)
    t_year = int(t_day // 365)
    print(f'{t_sec} sec = {t_day} day = {t_year} year')


var_1 = {'n': 33, 'k': 10, 's': 100, 'm': 0, 'v': 0}
var_2 = {'n': 26, 'k': 12, 's': 13, 'm': 3, 'v': 2}
var_3 = {'n': 52, 'k': 6, 's': 30, 'm': 5, 'v': 10}

bruteforce_time(**var_1)
bruteforce_time(**var_2)
bruteforce_time(**var_3)


def min_password_length(**kwargs):
    n = kwargs.get('n')
    t = kwargs.get('t')
    s = kwargs.get('s')
    t_sec = t * 365 * 24 * 3600
    k = round(log(t_sec * s, n))
    print(f'min password length - {k} symbols')


var_1 = {'n': 33, 't': 100, 's': 100}
var_2 = {'n': 26, 't': 120, 's': 13}
var_3 = {'n': 52, 't': 60, 's': 30}

min_password_length(**var_1)
min_password_length(**var_2)
min_password_length(**var_3)


def alph_symb_count(**kwargs):
    k = kwargs.get('k')
    t = kwargs.get('t')
    s = kwargs.get('s')
    t_sec = t * 365 * 24 * 3600
    n = round(pow(t_sec * s, 1 / k))
    print(f'number of symbols in the alphabet - {n} symbols')


var_1 = {'k': 5, 't': 100, 's': 100}
var_2 = {'k': 6, 't': 120, 's': 13}
var_3 = {'k': 10, 't': 60, 's': 30}

alph_symb_count(**var_1)
alph_symb_count(**var_2)
alph_symb_count(**var_3)
