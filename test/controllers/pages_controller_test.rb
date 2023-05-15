require "test_helper"

class PagesControllerTest < ActionDispatch::IntegrationTest
  test "should get cv" do
    get pages_cv_url
    assert_response :success
  end

  test "should get project" do
    get pages_project_url
    assert_response :success
  end

  test "should get skills" do
    get pages_skills_url
    assert_response :success
  end
end
