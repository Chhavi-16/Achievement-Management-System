<<<<<<< HEAD
def test_student_dashboard_requires_login(client):
    res = client.get("/student-dashboard", follow_redirects=False)
    assert res.status_code == 302
    assert "/student" in res.location


def test_teacher_dashboard_requires_login(client):
    res = client.get("/teacher-dashboard", follow_redirects=False)
    assert res.status_code == 302
    assert "/teacher" in res.location


def test_teacher_achievement_requires_login(client):
    res = client.get("/submit_achievements", follow_redirects=False)
    assert res.status_code == 302
=======
def test_student_dashboard_requires_login(client):
    res = client.get("/student-dashboard", follow_redirects=False)
    assert res.status_code == 302
    assert "/student" in res.location


def test_teacher_dashboard_requires_login(client):
    res = client.get("/teacher-dashboard", follow_redirects=False)
    assert res.status_code == 302
    assert "/teacher" in res.location


def test_teacher_achievement_requires_login(client):
    res = client.get("/submit_achievements", follow_redirects=False)
    assert res.status_code == 302
>>>>>>> c2e9f6021e5aa3f405794a69358b5d36c0350970
